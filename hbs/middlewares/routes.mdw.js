module.exports = function(app){
    
    //route liên quan admin
    app.use('/admin',require('../routes/admin/homepage_route'));
    app.use('/admin/mobile', require('../routes/admin/mobile_route'));
    app.use('/admin/laptop', require('../routes/admin/laptop_route'));
    app.use('/admin/headphone', require('../routes/admin/headphone_route'));
    app.use('/admin/watch', require('../routes/admin/watch_route'));
    app.use('/admin/user',require('../routes/admin/user_route'));

    //route liên quan annoymous
    app.use('/account',require('../routes/account_route'));
    app.use('/categories',require('../routes/category_route'));

    //route liên quan bidder
    app.use('/bidder',require('../routes/bidder/homepage_route'));
    app.use('/bidder/mobile', require('../routes/bidder/mobile_route'));
    app.use('/bidder/laptop', require('../routes/bidder/laptop_route'));
    app.use('/bidder/headphone', require('../routes/bidder/headphone_route'));
    app.use('/bidder/watch', require('../routes/bidder/watch_route'));
}