import {execa} from 'execa';
import path from 'node:path';
import {exit} from 'node:process';
import which from 'which';
import winston from 'winston';

async function main() {
  const args = process.argv.slice(2);

  const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.prettyPrint()
    ),
    transports: [
      new winston.transports.File({
        filename: '/tmp/npm-wrapper.log',
      }),
    ],
  });

  logger.info('argv', process.argv);

  if (args.indexOf('--no-save') > -1 || args[0] === 'install') {
    return;
  }

  if (process.env.NPM_WRAPPER) {
    const npmSelf = await which('npm');
    const npm = await which('npm', {
      path: process.env.PATH?.split(path.delimiter)
        .filter(s => s !== path.dirname(npmSelf))
        .join(path.delimiter),
    });
    await execa(npm, args, {stdio: 'inherit'});
    return;
  }

  await execa('pnpm', args, {env: {NPM_WRAPPER: '1'}, stdio: 'inherit'});
}

main().catch(err => {
  console.error(err);
  exit(1);
});
