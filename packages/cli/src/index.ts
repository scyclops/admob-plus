import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

import * as doctorCmd from './cmds/doctor.js';
import * as infoCmd from './cmds/info.js';
import * as installCmd from './cmds/install.js';
import * as testIdsCmd from './cmds/test-ids.js';
import {testAppIds} from './doctor/admob.js';

export {testAppIds};

export default (name: string) => {
  const {argv} = yargs(hideBin(process.argv))
    .scriptName(name)
    .option('cwd', {
      default: '.',
      normalize: true,
      coerce(x) {
        process.chdir(x);
        return x;
      },
    })
    .command(doctorCmd)
    .command(infoCmd)
    .command(installCmd)
    .command(testIdsCmd)
    .demandCommand()
    .help();

  return argv;
};
