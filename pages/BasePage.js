// pageObjects/SweetShopPage.js
class BasePage {
	constructor(page) {
		this.page = page;
		this.sweetsLink = page.locator('a[href="/sweets"]');
		this.addToBasketBtn = page.locator(".card-footer .btn").first();
		this.basketCount = page.locator(".navbar-badge");
		this.navigate_basket_button = page.locator("li.nav-item:nth-child(4) > a");
		this.navigate_login_page_button = page.locator(
			"li.nav-item:nth-child(3) > a",
		);
		this.basket_navigator = page.locator("li.nav-item:nth-child(4) > a");
		this.login_button = page.locator("li.nav-item:nth-child(3) > a");
		this.about_button = page.locator("li.nav-item:nth-child(2) > a");
		this.email_input = page.locator("#exampleInputEmail");
		this.password_İnput = page.locator("#exampleInputPassword");
		this.basket_Button = page.locator("li.nav-item:nth-child(4) > a");
		this.candy_logo_button = page.locator(".navbar-brand");
		this.candy_browse_button_navigate = page.locator(
			".navbar-nav > a:nth-child(1)",
		);
		this.browse_sweet_button = page.locator("a.btn:nth-child(4)");
		this.basket_billing_adr_name = page.locator(
			"div.row:nth-child(1) > div:nth-child(1) > input:nth-child(2)",
		);
		this.basket_billing_adr_last_name = page.locator(
			"div.row:nth-child(1) > div:nth-child(2) > input:nth-child(2)",
		);
		this.basket_billing_adr_email = page.locator("#email");
		this.basket_billing_adr_adress = page.locator("#address");
		this.basket_billing_adr_adress_opt = page.locator("#address2");
		this.basket_billing_adr_zip = page.locator("#zip");
		this.basket_billing_adr_name_on_card = page.locator("#cc-name");
		this.basket_billing_adr_card_number = page.locator("#cc-number");
		this.basket_billing_adr_expiration = page.locator("#cc-expiration");
		this.basket_billing_adr_CVV = page.locator("#cc-cvv");
		this.basket_billing_adr_reddeem_text = page.locator(
			"input.form-control:nth-child(1)",
		);
		this.basket_billing_adr_redeem_button = page.locator(
			"button.btn:nth-child(1)",
		);
		this.basket_billing_adr_delivery_type_free = page.locator(
			"div.custom-control:nth-child(1) > label:nth-child(2)",
		);
		this.delivery_standart_shipping = page.locator(
			"div.custom-control:nth-child(2) > label:nth-child(2)",
		);
		this.basket_billing_adr_empty_basket_button = page.locator(
			"div.input-group:nth-child(2) > a:nth-child(1)",
		);
		this.basket_billing_adr_delivery_type_shipping = page.locator(
			"div.custom-control:nth-child(2) > label:nth-child(2)",
		);
		this.basket_billing_adr_promo_text = page.locator(
			"input.form-control:nth-child(1)",
		);

		this.basket_billing_adr_empty_basket_button = page.locator(
			"div.input-group:nth-child(2) > a:nth-child(1)",
		);
		this.basket_billing_adr_finish_button = page.locator(
			"button.btn:nth-child(11)",
		);
		this.sweets_button_from_basket_page = page.locator(
			"li.nav-item:nth-child(1) > a:nth-child(1)",
		);
	}

	async basket_billing_adr_name_test(name) {
		await this.basket_page_enter();
		await this.basket_billing_adr_name_on_card.fill(name);
	}

	async basket_billing_adr_last_name_test(surname) {
		await this.basket_page_enter();
		await this.basket_billing_adr_last_name.fill(surname);
	}

	async basket_billing_adr_email_test(email) {
		await this.basket_page_enter();
		await this.basket_billing_adr_email.fill(email);
	}

	async basket_billing_adr_adress_test(adress) {
		await this.basket_page_enter();
		await this.basket_billing_adr_adress.fill(adress);
	}

	async basket_billing_adr_adress_opt_test(adress) {
		await this.basket_page_enter();
		await this.basket_billing_adr_adress_opt.fill(adress);
	}

	async basket_billing_adr_zip_test(zipcode) {
		await this.basket_page_enter();
		await this.basket_billing_adr_zip().fill(zipcode);
	}

	async basket_billing_adr_name_on_card_test(name) {
		await this.basket_page_enter();
		await this.basket_billing_adr_name_on_card.fill(name);
	}

	async basket_billing_adr_card_number_test(number) {
		await this.basket_page_enter();
		await this.basket_billing_adr_name_on_card.fill(number);
	}

	async basket_billing_adr_expiration_test(number) {
		await this.basket_page_enter();
		await this.basket_billing_adr_expiration.fill(number);
	}

	async basket_billing_adr_CVV_test(number) {
		await this.basket_page_enter();
		await this.basket_billing_adr_CVV.fill(number);
	}

	async basket_billing_adr_delivery_type_free_test() {
		await this.basket_page_enter();
		await this.basket_billing_adr_delivery_type_free.click();
	}

	async basket_billing_adr_delivery_type_shipping_test() {
		await this.basket_page_enter();
		await this.basket_billing_adr_delivery_type_shipping.click();
	}

	async basket_billing_adr_promo_test(promo) {
		await this.basket_page_enter();
		await this.basket_billing_adr_promo_text.fill(promo);
		await this.basket_billing_adr_redeem_button.click();
	}

	async basket_billing_adr_empty_basket_button_test() {
		await this.basket_page_enter();
		await this.basket_billing_adr_empty_basket_button.click();
	}

	async basket_billing_adr_finish_button_test() {
		await this.basket_page_enter();
		await this.basket_billing_adr_finish_button.click();
	}

	async navigate() {
		await this.page.goto("https://sweetshop.netlify.app/");
	}

	async basket_billing_adr_CVV_test(number) {
		await this.navigate_basket_button.click();
		await this.basket_billing_adr_CVV.fill(number);
	}

	async basket_billing_adr_zip_test(number) {
		await this.navigate_basket_button.click();
		await this.basket_billing_adr_zip.fill(number);
	}

	async basket_billing_adr_expiraton_info_test(number) {
		await this.navigate_basket_button.click();
		await this.basket_billing_adr_expiration.fill(number);
	}

	async basket_billing_name_on_card_test(name) {
		await this.navigate_basket_button.click();
		await this.basket_billing_adr_name_on_card.fill(number);
	}

	async basket_billing_card_number(name) {
		await this.navigate_basket_button.click();
		await this.basket_billing_adr_card_number.fill(number);
	}

	async basket_billing_addr_dropdown_country(subject) {
		await this.basket_Button.click();
		await this.page.selectOption("#country", {
			subject,
		});
	}

	async basket_billing_addr_dropdown_city(subject) {
		await this.basket_Button.click();
		await this.page.selectOption("#city", {
			subject,
		});
	}

	async login(password, email) {
		await this.navigate_login_page_button.click();
		await this.email_input.fill(email);
		await this.password_İnput.fill(password);
		await this.login_button.click();
	}

	async basket_button_test() {
		await this.basket_Button.click();
	}

	async about_button_page() {
		await this.about_button.click();
	}

	async candy_button_test() {
		await this.candy_logo_button.click();
	}

	async popular_section_test() {
		for (let i = 1; i <= 4; i++) {
			await this.popularSugarorder(i).click();
		}
	}

	popularSugarorder(index) {
		return this.page.locator(
			`div.col-lg-3:nth-child(${index}) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)`,
		);
	}

	async basket_page_enter() {
		await this.basket_navigator.click();
	}

	async basket_page_test() {
		await this.basket_page_enter();
	}

	async browse_section_test() {
		await this.navigate();
		await this.candy_browse_button_navigate.click();
		for (let i = 1; i <= 4; i++) {
			await this.browseSugarOrder(i).click();
		}
	}

	browseSugarOrder(index) {
		return this.page.locator(
			`div.row:nth-child(2) > div:nth-child(${index}) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)`,
		);
	}
	basketSugarOrder(index) {
		return this.page.locator(
			`li.list-group-item:nth-child(${index}) > div:nth-child(1) > a:nth-child(4)`,
		);
	}

	async basketSugarOrderTest() {
		await this.sweets_button_from_basket_page.click();
		await this.browse_section_test();
		await this.basket_page_enter();
		for (let i = 1; i <= 4; i++) {
			await this.basketSugarOrder(i).click();
		}
	}
}
module.exports = { BasePage };
