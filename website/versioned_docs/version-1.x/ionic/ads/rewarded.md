---
title: Rewarded Ad
sidebar_label: Rewarded
---

## Usage

```ts
import { AdMob } from '@admob-plus/ionic/ngx';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private platform: Platform, private admob: AdMob) {
    this.platform.ready().then(async () => {
      await this.admob.start();

      const rewarded = new this.admob.RewardedAd({
        adUnitId: 'ca-app-pub-xxx/yyy',
      })

      await rewarded.load()
      await rewarded.show()
    });
  }
}
```

## Related

* [Rewarded Ad - Cordova](/docs/cordova/ads/rewarded)
