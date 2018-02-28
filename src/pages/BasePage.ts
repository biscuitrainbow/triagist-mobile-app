import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Loading } from 'ionic-angular/components/loading/loading';

export default abstract class BasePage {

    private loader: Loading;

    constructor(public loadingCtrl: LoadingController) {

    }

    showLoading(message: string) {
        this.loader = this.loadingCtrl.create({
            content: message
        });

        this.loader.present();
    }

    hideLoading() {
        this.loader.dismiss();
    }

}