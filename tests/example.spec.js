// tests/homework.spec.js
const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage");

test.describe("Sweet Shop Main menu,About,Sugars,Browse Sugars Pages Functional Tests", () => {
	let website;

	test.beforeEach(async ({ page }) => {
		website = new BasePage(page);
		await website.navigate();
	});

	test("Sugar Browse Section Test", async ({ page }) => {
		await website.browse_section_test();
		await expect(page).toHaveURL(/.*sweets.*/);
	});

	test("Popular Sugars Sections Test", async ({ page }) => {
		await website.popular_section_test();
		await expect(page).toHaveURL(/.*.*/);
	});

	test("candy logo button test", async ({ page }) => {
		await website.candy_button_test();
		await expect(page).toHaveURL(/.*.*/);
	});

	test("Basket test", async ({ page }) => {
		await website.basket_button_test();
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("About Page test", async ({ page }) => {
		await website.about_button_page();
		await expect(page).toHaveURL(/.*about.*/);
	});

	test("Navigate to Home Page", async ({ page }) => {
		await website.navigate();
		await expect(page).toHaveURL("https://sweetshop.netlify.app/");
	});
});

test.describe("Basket Page Functional Tests", () => {
	let website;

	test.beforeEach(async ({ page }) => {
		website = new BasePage(page);
		await website.navigate();
	});

	test("Basket Page Billing info (all informations filled)", async ({
		page,
	}) => {
		await website.basket_page_enter();
		await website.basket_billing_adr_name_test("Kayra");
		await website.basket_billing_adr_last_name_test("yılmaz");
		await website.basket_billing_adr_email_test("kayra@gmail.com");
		await website.basket_billing_adr_adress_test("balbalb");
		await website.basket_billing_adr_adress_opt_test("fekefes");
		await website.basket_billing_adr_zip_test("4344");
		await website.basket_billing_adr_name_on_card_test("Hilal");
		await website.basket_billing_adr_card_number_test("3434 4345 5454 5454");
		await website.basket_billing_adr_expiration_test("4343");
		await website.basket_billing_adr_CVV_test("4445");
		await website.basket_billing_adr_delivery_type_free_test();
		await website.basket_billing_adr_delivery_type_shipping_test();
		await website.basket_billing_adr_promo_test("lflf");
		await website.basketSugarOrderTest();
		await website.basket_billing_adr_empty_basket_button_test();
		await website.basket_billing_adr_finish_button_test();
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Basket Page Billing info (all informations are Empty)", async ({
		page,
	}) => {
		await website.basket_page_enter();
		await website.basket_billing_adr_name_test("");
		await website.basket_billing_adr_last_name_test("");
		await website.basket_billing_adr_email_test("");
		await website.basket_billing_adr_adress_test("");
		await website.basket_billing_adr_adress_opt_test("");
		await website.basket_billing_adr_zip_test("");
		await website.basket_billing_adr_name_on_card_test("");
		await website.basket_billing_adr_card_number_test("");
		await website.basket_billing_adr_expiration_test("");
		await website.basket_billing_adr_CVV_test("");
		await website.basket_billing_adr_promo_test("");
		await website.basket_billing_adr_empty_basket_button_test();
		await website.basket_billing_adr_finish_button_test();
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket City Dropdown Test (Choose) option", async ({ page }) => {
		await website.basket_billing_addr_dropdown_city("Choose...");
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket City Dropdown Test (Bristol) option", async ({ page }) => {
		await website.basket_billing_addr_dropdown_city("Bristol");
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket City Dropdown Test (Cardiff) option", async ({ page }) => {
		await website.basket_billing_addr_dropdown_city("Cardiff");
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket City Dropdown Test (Swansea) option", async ({ page }) => {
		await website.basket_billing_addr_dropdown_city("Swansea");
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket Country Dropdown Test (Choose) option", async ({
		page,
	}) => {
		await website.basket_billing_addr_dropdown_country("Choose...");
		await expect(page).toHaveURL(/.*basket.*/);
	});

	test("Sugar Basket Country Dropdown Test (United Kingdom)", async ({
		page,
	}) => {
		await website.basket_billing_addr_dropdown_country("United Kingdom");
		await expect(page).toHaveURL(/.*basket.*/);
	});
});

test.describe("Login Page", () => {
	let website;

	test.beforeEach(async ({ page }) => {
		website = new BasePage(page);
		await website.navigate();
	});

	test("Login - Positive", async ({ page }) => {
		await website.login("password123", "test@example.com");
		await expect(page).toHaveURL(/.*login.*/);
	});

	test("Login - Negative (No email and Password)", async ({ page }) => {
		await website.login("", "");
		await expect(page).toHaveURL(/.*login.*/);
	});

	test("Login - Negative (No Password)", async ({ page }) => {
		await website.login("", "test@example.com");
		await expect(page).toHaveURL(/.*login.*/);
	});

	test("Login - Negative (No email)", async ({ page }) => {
		await website.login("password123", "");
		await expect(page).toHaveURL(/.*login.*/);
		test("Login - Negative (Invalid email)", async ({ page }) => {
			await website.login("password123", "test");

			await expect(page).toHaveURL(/.*login.*/);
		});

		test("Lack of .com", async ({ page }) => {
			await website.login("password123", "test@123");
			await expect(page).toHaveURL(/.*login.*/);
		});

		test("Lack of @", async ({ page }) => {
			await website.login("password123", "test.com");
			await expect(page).toHaveURL(/.*login.*/);
		});
	});
});
