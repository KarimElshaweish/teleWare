#import "RCTLocationModule.h"
#import <React/RCTLog.h>

@implementation RCTLocationModule

RCT_EXPORT_MODULE(LocationModule);
RCT_EXPORT_METHOD(getCurrentLocation:(RCTResponseSenderBlock)callback)
{
 RCTLogInfo(@"Pretending to create an event");
  int longitude = arc4random_uniform(150);
  int latitude = arc4random_uniform(150);
  callback(@[@(latitude), @(longitude)]);

}

@end
