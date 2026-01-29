const homePage = (req, res) => {
    res.render('home', { title: 'Home' });
};

const aboutPage = (req, res) => {
    res.render('about', { title: 'About' });
};

const demoPage = (req, res) => {
    res.render('demo', { title: 'Demo Page' });
};

const testErrorPage = (req, res) => {
    throw new Error('Intentional test error');
};

export {
    homePage,
    aboutPage,
    demoPage,
    testErrorPage
};
