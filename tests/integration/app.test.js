import nightmare from 'nightmare';
import "babel-polyfill";


describe('When visiting the homepage', function () {
	const url = 'http://localhost:3000';

	test('has header', async function () {
		const page = nightmare().goto(url);
		const header = await page.evaluate(() => document.getElementsByClassName("header")[0].textContent).end();
		expect(header).toContain('Test Project');
	});

	test('has footer', async function () {
		const page = nightmare().goto(url);
		const footer = await page.evaluate(() => document.getElementsByTagName('footer')[0].textContent).end();
		expect(footer).toContain('Andrey Menshikh 2017 Test Project');
	});

	test('has sidebar', async function () {
		const page = nightmare().goto(url);
		const sidebar = await page.evaluate(() => document.getElementsByClassName("nav")[0].textContent).end();
		expect(sidebar).toContain('DepartmentsEmployees');
	});

	test('has departments table', async function () {
		const page = nightmare().goto(url);
		const depTable = await page.evaluate(() => document.getElementById('departments-table').getElementsByClassName("panel-title")[0].textContent).end();
		expect(depTable).toContain('Departments Table');
	});
});


describe('When visiting the department page', function () {

	const url = 'http://localhost:3000/dep';

	test('has header', async function () {
		const page = nightmare().goto(url);
		const header = await page.evaluate(() => document.getElementsByClassName("header")[0].textContent).end();
		expect(header).toContain('Test Project');
	});

	test('has footer', async function () {
		const page = nightmare().goto(url);
		const footer = await page.evaluate(() => document.getElementsByTagName('footer')[0].textContent).end();
		expect(footer).toContain('Andrey Menshikh 2017 Test Project');
	});

	test('has sidebar', async function () {
		const page = nightmare().goto(url);
		const sidebar = await page.evaluate(() => document.getElementsByClassName("nav")[0].textContent).end();
		expect(sidebar).toContain('DepartmentsEmployees');
	});

	test('has departments table', async function () {
		const page = nightmare().goto(url);
		const depTable = await page.evaluate(() => document.getElementById('departments-table').getElementsByClassName("panel-title")[0].textContent).end();
		expect(depTable).toContain('Departments Table');
	});

});


describe('When visiting the employees page', function () {

	const url = 'http://localhost:3000/emp';

	test('has header', async function () {
		const page = nightmare().goto(url);
		const header = await page.evaluate(() => document.getElementsByClassName("header")[0].textContent).end();
		expect(header).toContain('Test Project');
	});

	test('has footer', async function () {
		const page = nightmare().goto(url);
		const footer = await page.evaluate(() => document.getElementsByTagName('footer')[0].textContent).end();
		expect(footer).toContain('Andrey Menshikh 2017 Test Project');
	});

	test('has sidebar', async function () {
		const page = nightmare().goto(url);
		const sidebar = await page.evaluate(() => document.getElementsByClassName("nav")[0].textContent).end();
		expect(sidebar).toContain('DepartmentsEmployees');
	});

	test('has employees table', async function () {
		const page = nightmare().goto(url);
		const empTable = await page.evaluate(() => document.getElementById('employees-table').getElementsByClassName("panel-title")[0].textContent).end();
		expect(empTable).toContain('Employees Table');
	});

});



describe('Side bar navigation', function () {

	const url = 'http://localhost:3000/';

	test('to departments', async function () {
		const page = nightmare().goto(url);
		const depPagePathname = await page.click('#departments-button').evaluate(() => document.location.pathname).end();
		expect(depPagePathname).toContain('/dep');
	});

	test('to employees', async function () {
		const page = nightmare().goto(url);
		const empPagePathname = await page.click('#employees-button').evaluate(() => document.location.pathname).end();
		expect(empPagePathname).toContain('/emp');
	});

});

/*describe('Department table', function () {

	const url = 'http://localhost:3000/dep';

	test('add new', async function () {
		const page = nightmare().goto(url);
		const addNew = await page.click('.react-bs-table-add-btn').type('.edit-text', 'test_department').click('.btn-primary').wait('.react-bs-table').evaluate(() => document.getElementById('departments-table').textContent).end();
		expect(addNew).toContain('test_department');
	});

});*/