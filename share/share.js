import $ from 'jquery';
import './share.css';

/** 每个页面的分享需要继承Share 类，然后扩展自己的 分享后操作函数shareFunc
 *  {
 *      type: 'facebook',
 *      selector: '.js-fb',
 *      url: '',
 *      platform: 'pc',
 *      options: {
 *          appId: 123123123,
 *      }
 * }
 *
 * @class Share
 */
class Share {
    static TYPES = { // 默认每个分享方式的type, 可以自由扩展
        facebook: 1,
        twitter: 2,
        vk: 3,
        google: 4,
        reddit: 5,
        pinterest: 6,
    }
    shareFunc() { // 扩展自己的 分享后操作函数shareFunc
        console.log(this);
    }
    static positon(height, width) {
        const w = $(window).width();
        const h = $(window).height();
        return {
            left: (w - width) / 2,
            top: (h - height) / 2,
        };
    }
    static encode({ ...rest }) {
        const result = {};
        Object.entries(rest).forEach(([key, val]) => {
            result[key] = encodeURIComponent(val);
        });
        return result;
    }
    static detectWindow(frame) {
        return new Promise((resolve) => {
            const handler = setInterval(() => { // eslint-disable-line
                if (frame.closed) {
                    clearInterval(handler);
                    resolve({
                        closed: true,
                    });
                }
            }, 1000);
        });
    }
    facebook({ // 分享的数据要使用开放图谱标签
        selector,
        url = window.location.href,
        platform = 'pc',
        appId,
        version = 'v2.7',
        onClick = () => {},
        onSuccess = () => {},
        ...rest
    } = {}) {
        const fjs = document.getElementsByTagName('script')[0];
        if (document.getElementById('facebook-jssdk')) return;
        const js = document.createElement('script');
        js.id = 'facebook-jssdk';
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
        window.fbAsyncInit = () => {
            FB.init({ appId, status: true, ookie: true, oauth: true, xfbml: true, version, }); // eslint-disable-line
            $(document).on('click', selector, () => {
                onClick();
                FB.ui({ // eslint-disable-line
                    method: 'share',
                    href: url,
                    mobile_iframe: platform === 'mobile',
                    ...rest,
                }, (res) => {
                    onSuccess(res);
                    this.shareFunc(selector);
                });
            });
        };
    }
    twitter({
        selector,
        url = window.location.href,
        desc = '',
        onClick = () => {},
        onClose = () => {},
        // onSuccess = () => {},
    } = {}) {
        let owner;
        const h = 540;
        const w = 650;
        const { left, top } = Share.positon(h, w);
        const { url: gUrl, desc: gDesc } = Share.encode({ url, desc });
        $(document).on('click', selector, () => {
            if (owner) return;
            onClick();
            owner = window.open(
                `https://twitter.com/intent/tweet?url=${gUrl}&text=${gDesc}`,
                '_blank',
                `location=yes,left=${left},top=${top},height=540,width=650,scrollbars=yes,status=yes`,
            );
            Share.detectWindow(owner).then((data) => {
                owner = null;
                onClose(data);
                this.shareFunc(selector);
            });
        });
    }
    vk({
        selector,
        url = window.location.href,
        title = '',
        img = '',
        onClick = () => {},
        onClose = () => {},
        // onSuccess = () => {},
    } = {}) {
        let owner;
        const h = 540;
        const w = 650;
        const { left, top } = Share.positon(h, w);
        const { url: gUrl, title: gTitle, img: gImg } = Share.encode({ url, title, img });
        $(document).on('click', selector, () => {
            if (owner) return;
            onClick();
            owner = window.open(
                `http://vk.com/share.php?url=${gUrl}&title=${gTitle}&=screenshot${gImg}`,
                '_blank',
                `location=yes,left=${left},top=${top},height=540,width=650,scrollbars=yes,status=yes`,
            );
            Share.detectWindow(owner).then((data) => {
                owner = null;
                onClose(data);
                this.shareFunc(selector);
            });
        });
    }
    google({
        selector,
        url = window.location.href,
        title = '',
        onClick = () => {},
        onClose = () => {},
    } = {}) {
        let owner;
        const h = 540;
        const w = 650;
        const { left, top } = Share.positon(h, w);
        const { url: gUrl, title: gTitle } = Share.encode({ url, title });
        $(document).on('click', selector, () => {
            if (owner) return;
            onClick();
            owner = window.open(
                `https://plus.google.com/share?url=${gUrl}&t=${gTitle}`,
                '_blank',
                `location=yes,left=${left},top=${top},height=540,width=650,scrollbars=yes,status=yes`,
            );
            Share.detectWindow(owner).then((data) => {
                owner = null;
                onClose(data);
                this.shareFunc(selector);
            });
        });
    }
    reddit({
        selector,
        url = window.location.href,
        title = '',
        onClick = () => {},
        onClose = () => {},
    } = {}) {
        let owner;
        const h = 540;
        const w = 650;
        const { left, top } = Share.positon(h, w);
        const { url: gUrl, title: gTitle } = Share.encode({ url, title });
        $(document).on('click', selector, () => {
            if (owner) return;
            onClick();
            owner = window.open(
                `https://www.reddit.com/submit?url=${gUrl}&title=${gTitle}`,
                '_blank',
                `location=yes,left=${left},top=${top},height=540,width=650,scrollbars=yes,status=yes`,
            );
            Share.detectWindow(owner).then((data) => {
                owner = null;
                onClose(data);
                this.shareFunc(selector);
            });
        });
    }
    pinterest({
        selector,
        // url,
        // img,
        onClick = () => {},
    } = {}) {
        const fjs = document.getElementsByTagName('script')[0];
        if (document.getElementById('pinterest-jssdk')) return;
        const js = document.createElement('script');
        js.id = 'pinterest-jssdk';
        js.src = '//assets.pinterest.com/js/pinit.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = () => {
            $(document).on('click', selector, () => {
                onClick();
                PinUtils.pinAny() // eslint-disable-line
            });
        };
        console.log(this);
    }
}
export default Share;
