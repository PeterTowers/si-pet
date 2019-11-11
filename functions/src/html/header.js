const styles = require('../css/styles');

module.exports = { header: '<!DOCTYPE html>' +
    '<html>' +
    '  <head>' +
    '    <meta charset="utf-8">' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1">' +
    '    <title>SI-PET A Smart house para o seu animal de estimação</title>' +
    '    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>' +
    '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>' +
    '    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>' +
    '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">' +
    '    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">' +
    '    <style>' + styles.style + '</style>' +
    '  </head>' +
    '  <body>' +
    '<div class="wrapper">' +
    '            <!-- Sidebar Holder -->' +
    '            <nav id="sidebar">' +
    '                <div id="dismiss">' +
    '                    <i class="fa fa-arrow-left"></i>' +
    '                </div>' +
    '                <div class="sidebar-header">' +
    '                    <h3>MENU</h3>' +
    '                </div>' +
    '                <ul class="list-unstyled components">' +
    '                    <li>' +
    '                        <a href="./home"><i class="fa fa-camera"></i> Câmera</a>' +
    '                        <a href="./alimentacao"><i class="fa fa-drumstick-bite"></i> Alimentação</a>' +
    '                        <a href="./galeria"><i class="fa fa-photo-video"></i> Galeria</a>' +
    '                        <a href="./ambiente"><i class="fa fa-home"></i> Ambiente</a>' +
    '                        <a href="./historico"><i class="fa fa-clock"></i> Histórico</a>' +
    '                        <a href="./pets"><i class="fa fa-paw"></i> Pets</a>' +
    '                        <a href="./configuracao"><i class="fa fa-cog"></i> Configuração</a>' +
    '                    </li>' +
    '                </ul>' +
    '            </nav>' +
    '            <!-- Page Content Holder -->' +
    '            <div id="content">' +
    '            <nav class="navbar navbar-default">' +
    '                 <div class="container-fluid">' +
    '                     <div class="navbar-header">' +
    '                         <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">' +
    '                             <span>Menu</span>' +
    '                         </button>' +
    '                     </div>' +
    '                     <div><b> {title} </b></div>' +
    '                 </div>' +
    '             </nav>' };