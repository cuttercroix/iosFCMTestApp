import { Component, OnInit } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { FCM } from "@capacitor-community/fcm";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  async ngOnInit(): Promise<void> {

    // register for push
    await PushNotifications.requestPermissions();
    await PushNotifications.register();

    // now you can subscribe to a specific topic
    FCM.subscribeTo({ topic: "com.mygiddyup.test" })
      .then((r) => alert(`subscribed to com.mygiddyup.test`))
      .catch((err) => console.log(err));
/*
    // Unsubscribe from a specific topic
    FCM.unsubscribeFrom({ topic: "test" })
      .then(() => alert(`unsubscribed from topic`))
      .catch((err) => console.log(err));
*/
    // Get FCM token instead the APN one returned by Capacitor
    FCM.getToken()
      .then((r) => alert(`Token ${r.token}`))
      .catch((err) => console.log(err));
/*
    // Remove FCM instance
    FCM.deleteInstance()
      .then(() => alert(`Token deleted`))
      .catch((err) => console.log(err));
*/
    // Enable the auto initialization of the library
    FCM.setAutoInit({ enabled: true }).then(() => alert(`Auto init enabled`));

    // Check the auto initialization status
    FCM.isAutoInitEnabled().then((r) => {
      console.log("Auto init is " + (r.enabled ? "enabled" : "disabled"));
    });
  }
  title = 'testApp';


}
