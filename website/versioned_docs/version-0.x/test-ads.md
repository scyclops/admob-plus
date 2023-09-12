---
id: test-ads
title: Test Ads
sidebar_label: Test Ads
---

It is important to enable test ads during development so that you can click on them without charging Google advertisers. If you click on too many ads without being in test mode, you risk your account being flagged for invalid activity.

## Dev Mode

Under dev mode, test ads are served, it could be turn on as follow,

```js
admob.setDevMode(true)
```

# Firebase Test Lab

Pre-launch report in Google Play Console is powered by [Firebase Test Lab for Android](https://firebase.google.com/docs/test-lab/).

It is important to use test ads in such environment, therefore this plugin will [detect it](https://firebase.google.com/docs/test-lab/android/android-studio#modify_instrumented_test_behavior_for) and do the right thing.


## Further reading

* [Test Ads in Android](https://developers.google.com/admob/android/test-ads)
* [Test Ads in iOS](https://developers.google.com/admob/ios/test-ads)
