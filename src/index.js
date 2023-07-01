
/* 

 * Author: @Zoltan Bogaromi
 */

var serviceHost = "http://localhost/stock-ms-rest-api/public/";

setupNavigation();


    addStockSubmit(function(data) //új készlet post-olása
    {
        addStock(data);
    });

    addItemSubmit(function(data) //új termék post-olása
    {
        addItems(data);
    });

    addPartnerSubmit(function(data) //új partner post-olása
    {
        addPartners(data);
    });

    indexStockTable();





          