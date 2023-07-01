/* 

 * Author: @Zoltan Bogaromi
 */

function showNav()
{
    var nav =` <nav class="navbar navbar-expand-lg navbar-light bg-light ps-4">
        
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="stocks">Készlet <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="items">Termékek</a>
        <a class="nav-item nav-link" href="partners">Partnerek</a>
      </div>
    </div>
    
  </nav>`;

  document.querySelector(".nav_section").innerHTML = nav;

}

function showStocks(stocks)
{
    
    var header = `<div class="row justify-content-between">                  
                        <div class="col-auto mr-auto col_title"><h1>Készlet</h1></div>
                        <div class="col-auto col_button"><button data-toggle="modal" data-target="#ibt" onclick="openStockForm();" type="button" class="btn btn-primary">bevételezés</button></div>
                  </div>`;
    var content = `<div class="row">
                      <div class="col col-lg-12 col-sm-12">
                          <section>
                              <div class="table-responsive">
                                  <table class="table table-striped mb-4">
                                      <thead>
                                          
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </section>
                      </div>
                  </div>`;
    var thead = ` <tr>
                    <th>Id</th>
                    <th>Megnevezés</th>
                    <th>Mennyiség</th>
                    <th>Ár</th>
                    <th>Raktár</th>
                 </tr>`;
    var html = '';

    for(var s of stocks)
    {
       
        html += `<tr>`;
        html += `<td>${s.id}</td>`;
        html += `<td>${s.item_name}</td>`;
        html += `<td>${s.quantity} ${s.unit}</td>`;
        //html += `<td>${s.unit}</td>`;
        html += `<td>${s.price}</td>`;
        html += `<td>${s.store}</td>`;
        html += `</tr>`;
    }

    
    document.querySelector("header").innerHTML = header;
    document.querySelector("div.content").innerHTML = content;
    document.querySelector("table.table thead").innerHTML = thead;
    document.querySelector("table.table tbody").innerHTML = html;

    
}
function showItems(items)
{
    var header = `<div class="row justify-content-between">                  
                        <div class="col-auto mr-auto"col_title"><h1>Termékek</h1></div>
                        <div class="col-auto col_button"><button type="button" class="btn btn-primary add_new_poduct" data-toggle="modal" data-target="#addItem"  onclick="openItemForm();" >Új termék létrehozása</button></div>
                  </div>`;
    var thead = ` <tr>
                    <th>Id</th>
                    <th>Termék neve</th>
                    <th>Leírása</th>
                    <th>Ár</th>
                    <th>Létrehozva</th>
                    <th>Műveletek</th>
                  </tr>`;

    var html = '';

    for(var i of items)
    {
        html += `<tr>`;
        html += `<td>${i.id}</td>`;
        html += `<td>${i.name}</td>`;
        html += `<td>${i.description}</td>`;
        html += `<td>${i.price}</td>`;
        html += `<td>${i.created}</td>`;
        html += `<td><i title="módosítás" class="fa-regular fa-pen-to-square"></i><span class="ms-4"><i title="törlés" class="fa-regular fa-trash-can"></i></span></td>`;
        html += `</tr>`;
    }
    document.querySelector("header").innerHTML = header;
    document.querySelector("table.table thead").innerHTML = thead;
    document.querySelector("table.table tbody").innerHTML = html;

    
}
function showPartners(partners)
{

    var header = `<div class="row justify-content-between">                  
                        <div class="col-auto mr-auto"col_title"><h1>Partnerek</h1></div>
                        <div class="col-auto col_button"><button type="button" class="btn btn-primary add_new_partner" data-toggle="modal" data-target="#addPartner"  onclick="openPartnerForm();">Új partner hozzáadása</button></div>
                  </div>`;
    var thead = ` <tr>
                    <th>Id</th>
                    <th>Partner neve</th>
                    <th>Elérhetősége</th>
                    <th>Státusa</th>
                    <th>Actions</th>
                  </tr>`;

    var html = '';

    for(var p of partners)
    {
       
        html += `<tr>`;
        html += `<td>${p.id}</td>`;
        html += `<td>${p.name}</td>`;
        html += `<td>${p.contact}</td>`;
        html += `<td>${p.status}</td>`;
        html += `<td><i title="módosítás" class="fa-regular fa-pen-to-square"></i><span class="ms-4"><i title="törlés" class="fa-regular fa-trash-can"></i></span></td>`;
        html += `</tr>`;
    }
    document.querySelector("header").innerHTML = header;
    document.querySelector("table.table thead").innerHTML = thead;
    document.querySelector("table.table tbody").innerHTML = html;

    
}
