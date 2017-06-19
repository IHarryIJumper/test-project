import React from 'react';
import renderer from 'react-test-renderer';
import PreloaderComponent from '../../client/src/scripts/components/preloader/preloader.jsx';


describe('Preloader matching schema', function () {
	test('without props', () => {
		const preloader = renderer.create(<PreloaderComponent />).toJSON();
		expect(preloader).toMatchSnapshot();
	});

	test('with show=true', () => {
		const preloader = renderer.create(<PreloaderComponent show={true} />).toJSON();
		expect(preloader).toMatchSnapshot();
	});

	test('with show=false', () => {
		const preloader = renderer.create(<PreloaderComponent show={false} />).toJSON();
		expect(preloader).toMatchSnapshot();
	});

});