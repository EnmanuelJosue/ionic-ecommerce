import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { LoadingController } from "@ionic/angular/standalone";
import { inject } from "@angular/core";
import { finalize, Observable } from "rxjs";

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loadingCtrl = inject(LoadingController);
  let loading: HTMLIonLoadingElement;

  const showLoading = async () => {
    loading = await loadingCtrl.create({
      message: 'Loading...',
    });
    await loading.present();
  };
  showLoading();

  return next(req).pipe(
    finalize(async () => {
      if (loading) {
        await loading.dismiss();
      }
    })
  );
}
