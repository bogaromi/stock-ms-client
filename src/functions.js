/* 

 * Author: @Zoltan Bogaromi
 */

function setupNavigation()
{
        showNav();
        var navLinks = document.querySelectorAll("nav a");

    for(var link of navLinks)
    {
        link.onclick = LinkClick;
    }

    function LinkClick(evt)
    {
        evt.preventDefault();

        var href = this.getAttribute("href");

        switch(href)
        {
            case href = "stocks":
                indexStockTable()
                break;
            case href = "items":
                indexItemTable()
                break;
            case href = "partners":
                indexPartnerTable()
                break;
        }

    }
}
function indexStockTable()
{
    getStocks(function (stocks)
    {
        showStocks(stocks);
     
    });
}
function indexItemTable()
{
    getItems(function (items)
    {
        showItems(items);
       
    });
}
function indexPartnerTable()
{
    getPartners(function (partners)
    {
        showPartners(partners);
       
    });
    
}

function listItems()
{
    getItems(function (itemsName)
    {
        //showItemsName(items);

        var html = '';
        html += `<option selected class="text-muted">Termék kiválasztása</option>`;

        for(var i of itemsName)
            {   
                
                html += `<option>${i.name}</option>`;
            }

    document.querySelector("div.item_list select").innerHTML = html;
     
    });
}
function listStore()
{
    getItems(function (storesName)
    {
        //showItemsName(items);

        var html = '';
        html += `<option selected class="text-muted">Termék kiválasztása</option>`;

        for(var s of storesName)
            {   
                
                html += `<option>${s.store}</option>`;
            }

    document.querySelector("div.store_list select").innerHTML = html;
     
    });
}

/** --- Add stocks ----*/

function openStockForm()
{
    
    getItems(function (items)
    {
        //showItemsName(items);

        var htmlProduct = '';
        htmlProduct += `<option selected disabled>Termék kiválasztása</option>`;
        for(var i of items)
        {                         
            htmlProduct += `<option value = "${i.name}">${i.name}</option>`;
        }
        document.querySelector("div.item_list select").innerHTML = htmlProduct;
 
    });

    getStore(function (store)
    {

        var htmlStore = '';
        htmlStore += `<option selected disabled>Raktár kiválasztása</option>`;    
        for(var i of store)
        {              
            htmlStore += `<option value = "${i.id}">${i.id}</option>`;
        }
        document.querySelector("div.store_list select").innerHTML = htmlStore;
 
    });



    var html = '';
    //html += `<option selected class="text-muted">Termék kiválasztása</option>`;

    html += `<!--<div class="row justify-content-between">                  
    <div class="col-auto mx-auto col_title"><h1>Készlet létrehozása</h1></div>      
    </div>-->
        <div class="container-fluid">
            <div class="content">
                <div class="row g-3">

                                <div class="col-12 item_list">
                                    <label for="itemOptions" class="form-label">Megnevezés</label>
                                    <select name="item_name" id="item_name" class="form-select">
                                      <option selected>Termék kiválasztása</option>
                                      
                                    </select>
                                  </div>
                                  <div class="col-md-6">
                                    <label for="" class="form-label">Mennyiség</label>
                                    <input type="number" class="form-control" id="quantity" >
                                  </div>
                                  <div class="col-md-6">
                                    <label for="" class="form-label">Egység</label>
                                    <input type="text" class="form-control" id="unit" placeholder="db">
                                  </div>
                                <div class="col-md-6">
                                  <label for="" class="form-label">Ár</label>
                                  <input type="number" class="form-control" id="price" placeholder="A termék ára">
                                </div>
                                <div class="col-md-6 store_list">
                                  <label for="inputCity" class="form-label">Raktár</label>
                                  <select name="store" id="store" class="form-select">
                                    <option selected>Raktár kiválasztása</option>                                    
                                  </select>
                                </div>
                            </div>
                
                </div>
            </div>
        </div>`;
        // document.querySelector("header").innerHTML = header;
        document.querySelector("div.modal_form_content").innerHTML = html;

     
}

/** --- Add stocks End----*/

/** --- Add items ----*/

function openItemForm()
{

    getPartners(function (partner)
    {

        var htmlPartner= '';
        htmlPartner += `<option selected disabled>Beszállító kiválasztása</option>`;    
        for(var p of partner)
        {              
            htmlPartner += `<option  id = "${p.id}">${p.name}</option>`;
        }
        document.querySelector("div.partner_list select").innerHTML = htmlPartner;
 
    });

    var html = '';

    html += `<div class="container-fluid">
                <div class="content">
                    <div class="row g-3">

                                    <div class="col-12">
                                        <label for="name" class="form-label">Termék neve</label>
                                        <input type="text" class="form-control" id="name" >
                                    </div>

                                    <div class="col-col-12">
                                        <label for="" class="form-label">Leírás</label>
                                        <textarea class="form-control" name="description" id="description"></textarea>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="price" class="form-label">Ár</label>
                                        <input type="number" class="form-control" id="price" placeholder="A termék ára">
                                    </div>
                                    <div class="col-md-6 partner_list">
                                        <label for="partner" class="form-label">Beszállító Partner</label>
                                        <select name="partner" id="partner" class="form-select">
                                            <option selected>Beszállító kiválasztása</option>                                    
                                        </select>
                                    </div>

                    
                    </div>
                </div>
            </div>`;

        // document.querySelector("header").innerHTML = header;
        document.querySelector("div.modal_item_form_content").innerHTML = html;

     
}

/** --- Add items End----*/


/** --- Add Partners ----*/

function openPartnerForm()
{

    var html = '';

    html += `<div class="container-fluid">
                <div class="content">
                    <div class="row g-3">

                        <div class="col-12">
                            <label for="name" class="form-label">Partner neve</label>
                            <input type="text" class="form-control" id="name" >
                        </div>

                        <div class="col-col-12">
                            <label for="" class="form-label">Elérhetősége</label>
                            <textarea class="form-control" name="contact" id="contact"></textarea>
                        </div>
                   
                    </div>
                </div>
            </div>`;

        // document.querySelector("header").innerHTML = header;
        document.querySelector("div.modal_partner_form_content").innerHTML = html;

     
}

/** --- Add Partners End----*/


function addStockSubmit(method)
{
    document.querySelector("form div.modal-footer button").onclick = function(evt)
    {
        evt.preventDefault();

        //var stocks = document.getElementById("stocks").value;
        var prodName = document.getElementById("item_name").value;
        var quantity = document.getElementById("quantity").value;
        var unit = document.getElementById("unit").value;
        var price = document.getElementById("price").value;
        var store = document.getElementById("store").value;
     
        var data = `item_name=${prodName}&quantity=${quantity}&unit=${unit}&price=${price}&store=${store}`;
        
        document.getElementById("item_name").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("unit").value = "";
        document.getElementById("price").value = "";
        document.getElementById("store").value = "";
       

        method(data);
        console.log("onclick");
    };
    
}

function addItemSubmit(method)
{
    document.querySelector("form div.item_modal_footer button").onclick = function(evt)
    {
        evt.preventDefault();

        var name = document.getElementById("name").value;
        var description = document.getElementById("description").value;
        var price = document.getElementById("price").value;
        var partner = document.getElementById("partner").value;
        var status = 1;

        var data = `name=${name}&description=${description}&price=${price}&partner=${partner}&status=${status}`;
        
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        document.getElementById("partner").value = "";
       

        method(data);

    };
    
}
function addPartnerSubmit(method)
{
    document.querySelector("form div.partner_modal_footer button").onclick = function(evt)
    {
        evt.preventDefault();

        var name = document.getElementById("name").value;
        var contact = document.getElementById("contact").value;
        var status = 1;

        var data = `name=${name}&contact=${contact}&status=${status}`;
        
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
       

        method(data);

    };
    
}

function ajax(node, method, data, onReady)
{

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var content = JSON.parse(this.responseText);
            onReady(content);
            
        }
    };
    xhr.open(method, serviceHost + node, true);
    if(method == "POST")
    {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    xhr.send(data);
   
}


function getStocks(onReady)
{
    ajax("stocks", "GET", null, onReady);
}
function addStock(data, onReady)
{
    ajax("stocks", "POST", data, onReady);
}
function getItems(onReady)
{
    ajax("items", "GET", null, onReady);
}
function addItems(data, onReady)
{
    ajax("items", "POST", data, onReady);
}
function deleteItem(data, onReady)
{
    ajax("items/:id", "DELETE", data, onReady);
}
function getItemsName(onReady)
{
    ajax("items", "GET", null, onReady);
}
function getPartners(onReady)
{
    ajax("partners", "GET", null, onReady);
}
function addPartners(data, onReady)
{
    ajax("partners", "POST", data, onReady);
}
function getStore(onReady)
{
    ajax("store", "GET", null , onReady);
}

