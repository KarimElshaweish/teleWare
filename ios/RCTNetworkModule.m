#import "RCTNetworkModule.h"
#import <React/RCTLog.h>

@implementation RCTNetworkModule

RCT_EXPORT_MODULE(NetworkModule);
RCT_EXPORT_METHOD(getCurrencyApi:(RCTResponseSenderBlock)callback)
{
 RCTLogInfo(@"Pretending to create an event");
  NSURL *url = [NSURL URLWithString:@"https://v6.exchangerate-api.com/v6/0a464380c034ea9686888507/latest/USD/"];
     NSData *data = [NSData dataWithContentsOfURL:url];
     NSString *ret = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
     NSLog(@"ret=%@", ret);
  
     callback(@[ret]);
}

@end
