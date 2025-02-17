#import <Foundation/Foundation.h>
#import <EXAdsAdMob/EXAdsAdMobDFPManager.h>
#import <EXAdsAdMob/EXAdsDFPBannerView.h>

@implementation EXAdsAdMobDFPManager

UM_EXPORT_MODULE(ExpoPublisherBannerView);

- (NSString *)viewName
{
  return @"ExpoAdsPublisherBannerView";
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[
           @"onAdmobDispatchAppEvent",
           @"onAdViewDidDismissScreen",
           @"onAdViewDidReceiveAd",
           @"onAdViewWillDismissScreen",
           @"onAdViewWillLeaveApplication",
           @"onAdViewWillPresentScreen",
           @"onDidFailToReceiveAdWithError",
           @"onSizeChange",
           ];
}

- (UIView *)view
{
  return [[EXAdsDFPBannerView alloc] init];
}

UM_VIEW_PROPERTY(bannerSize, NSString *, EXAdsDFPBannerView)
{
  [view setBannerSize:value];
}

UM_VIEW_PROPERTY(adUnitID, NSString *, EXAdsDFPBannerView)
{
  [view setAdUnitID:value];
}

UM_VIEW_PROPERTY(testDeviceID, NSString *, EXAdsDFPBannerView)
{
  [view setTestDeviceID:value];
}

UM_VIEW_PROPERTY(additionalRequestParams, NSDictionary *, EXAdsDFPBannerView)
{
  [view setAdditionalRequestParams:value];
}

@end
