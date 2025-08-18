// @name      BNAM Footer (Product only) - 2025.02
// @author    https://bandainamco-am.co.jp/
// @version   1.0

var domain = 'https://bandainamco-am.co.jp';
var footer_html = `<div class="footer_wrapper">
    <ul class="footer_nav">
        <li><a href="${domain}/attention/">サイトポリシー</a></li>
        <li><a class="ot-sdk-show-settings" style="cursor:pointer;">クッキーの設定</a></li>
        <li><a href="${domain}/privacy/">プライバシーポリシー</a></li>
        <li><a href="https://bnam-customer.my.site.com/FAQ/s/" target="_blank" rel="noopener">よくあるご質問・お問い合わせ</a></li>
    </ul>
</div>
<div class="footer_wrapper">
    <ul class="footer_copyright">
        <li class="footer_groupLogo"><a href="https://xp.bandainamco-am.co.jp/"><img src="${domain}/groupHeader/logo/groupLogo-01.svg" alt="BANDAI NAMCO Fun for All into the Future" /></a></li>
        <li><small>&copy;Bandai Namco Experience Inc.</small></li>
    </ul>
</div>`;

// フッター用CSSを追加
var newLinkElement = document.createElement('link');
newLinkElement.rel = 'stylesheet';
newLinkElement.href = domain+'/common/tmpl/css/bnamFooter.min.css';
document.head.appendChild(newLinkElement);

// Onetrustクッキーアイコン非表示用CSS追加
/*var styleElement = document.createElement("style");
styleElement.innerHTML = "#ot-sdk-btn-floating{display:none!important}";
document.head.appendChild(styleElement);*/

// body末尾にフッターHTMLを書き出し
var newFooterElement = document.createElement('footer');
newFooterElement.id = 'common_page_footer';
newFooterElement.classList.add("whiteMode");
newFooterElement.innerHTML = footer_html;
document.body.appendChild(newFooterElement);
