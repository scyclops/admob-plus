import AppOpenAd from './ads/app-open';
import BannerAd, {BannerAdOptions} from './ads/banner';
import {start} from './ads/base';
import InterstitialAd from './ads/interstitial';
import NativeAd, {NativeAdOptions} from './ads/native';
import RewardedAd, {
  RewardedAdOptions,
  ServerSideVerificationOptions,
} from './ads/rewarded';
import RewardedInterstitialAd, {
  RewardedInterstitialAdOptions,
} from './ads/rewarded-interstitial';
import WebViewAd from './ads/webview';
import {AdMobConfig, execAsync} from './common';
import {Events} from './shared';

export * from './ads/base';
export {
  AdMobConfig,
  AppOpenAd,
  BannerAd,
  BannerAdOptions,
  InterstitialAd,
  NativeAd,
  NativeAdOptions,
  RewardedAd,
  RewardedAdOptions,
  RewardedInterstitialAd,
  RewardedInterstitialAdOptions,
  ServerSideVerificationOptions,
  WebViewAd,
};

export class AdMob {
  public readonly AppOpenAd = AppOpenAd;
  public readonly BannerAd = BannerAd;
  public readonly InterstitialAd = InterstitialAd;
  public readonly NativeAd = NativeAd;
  public readonly RewardedAd = RewardedAd;
  public readonly RewardedInterstitialAd = RewardedInterstitialAd;
  public readonly WebViewAd = WebViewAd;

  public readonly Events = Events;

  configure(config: AdMobConfig) {
    return execAsync('configure', [config]);
  }

  public start() {
    return start();
  }
}

declare global {
  const admob: AdMob;
}

export default AdMob;
