#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>
#import <CoreLocation/CoreLocation.h>

@interface EMViewController : UIViewController <CLLocationManagerDelegate>{
    CLLocationManager *locationManager;
}
@end
@interface RCTLocationModule : NSObject <RCTBridgeModule>
@end
