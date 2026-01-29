const addDemoHeaders = (req, res, next) => {
    res.setHeader('X-Demo', 'true');
    res.setHeader('X-Powered-By', 'CSE 340');
    next();
};

export { addDemoHeaders };
