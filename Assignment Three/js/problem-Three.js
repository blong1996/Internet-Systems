/**
 * Brandon Long
 * June 3, 2016
 * Internet Systems
 * Assignment Three  | Problem Three
 *
 *  /\\\\\\\\\\\\    /\\\              /\\\\\\\\\\\    /\\\\\     /\\\    /\\\\\\\\\\\
 *  \/\\\////////\\\ \/\\\            /\\\\////////\\\ \/\\\\\\   \/\\\  /\\\\////////\\\
 *   \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\/\\\  \/\\\ \/\\\       \///
 *    \/\\\\\\\\\\\\/  \/\\\           \/\\\       \/\\\ \/\\\//\\\ \/\\\ \/\\\
 *     \/\\\///////\\\\ \/\\\           \/\\\       \/\\\ \/\\\\//\\\\/\\\ \/\\\     /\\\\\\
 *      \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\ \//\\\/\\\ \/\\\    \////\\\
 *       \/\\\      \/\\\ \/\\\           \/\\\       \/\\\ \/\\\  \//\\\\\\ \/\\\       \/\\\
 *        \/\\\\\\\\\\\\/  \/\\\\\\\\\\\\\ \/\/\\\\\\\\\\\/  \/\\\   \//\\\\\ \/\/\\\\\\\\\\\/
 *         \////////////    \/////////////    \///////////    \///     \/////    \///////////
 */


function go() {

    var transactions, balances, clientNames = getNames();

    transactions = recordTransactions(clientNames);
    balances = calcBalances(transactions, clientNames);
    outTransactions(transactions, clientNames);
    outBalances(balances, clientNames);
    var againDiv = document.getElementById("again");

    // if data is entered 
    if (clientNames.length != 0) {

        againDiv.innerHTML = "<button onclick='go()'>Insert New Data</button>";
        // if not, state no data has been entered
    } else {

        againDiv.innerHTML = "<button onclick='go()'>Insert Data</button>";
    }


}

function recordTransactions(clientNames) {

    var client, amount , transactions = [];
    // current client name, amount of transaction, array for transactions
    var ok;

    while (ok = confirm("Press ok to add a new transaction \n" +
        "or press cancel to finish entering transactions")) {
        var transaction =  {};
        for (var y = 0; y < clientNames.length; y++) {
                client = clientNames[y];
            // allow user to input transaction amount
            amount = window.prompt("Enter "+client+"'s transaction amount" +
                "\n(positive or negative double value)", "0.00");
            
            // check if input is valid

            if (!(isNaN(amount))) {
            } else {

                do {
                    amount = window.prompt(" Please follow directions... \n" +
                        "Enter "+client+"'s transaction amount" +
                        "\n(positive or negative double value)", "0.00");
                }
                while (isNaN(amount))
            }
            // if nothing is entered, default to $0.00
            if (amount == null) {
                amount = 0.00;
            }
            // add client's transaction to object
            amount = eval(amount).toFixed(2);
            transaction[clientNames[y]] = amount;
        }

        // add transaction set to transactions array
        transactions.push(transaction);
    }
    return transactions;

}

function calcBalances(transactions, clientNames) {

    var  totalBalance = 0.00, balances ={};
    // current client name ,  total balance, total balance object

    for (var x = 0; x < clientNames.length; x++) {
        for (var y = 0; y < transactions.length; y++) {
            totalBalance += eval(transactions[y][clientNames[x]]);
        }

        // add total balance for client
        totalBalance = eval(totalBalance).toFixed(2);
        balances[clientNames[x]] = totalBalance;
        totalBalance = 0;

    }
    return balances;

}

function outTransactions(transactions, clientNames) {

    var header="<tr><th>Transactions</th>", body ="";

    // create table header
    for (var x = 0; x < clientNames.length; x++) {
        header += "<th>"+clientNames[x]+"</th>";
    }
    header+="</tr>";
    // create table body
    for (var y = 0; y < transactions.length; y++) {
        body += "<tr><th>"+y+"</th>";
            for (x = 0; x < clientNames.length; x++) {
                body += "<td>$"+transactions[y][clientNames[x]]+"</td>";
        }
        body+="</tr>";
    }

    // add contents to table
    var headerDiv = document.getElementById("transTH");
    var bodyDiv = document.getElementById("transTB");
    headerDiv.innerHTML = header;
    bodyDiv.innerHTML = body;

}

function outBalances(balances, clientNames) {

    var header="<tr><th></th>", body ="<tr><th>Balance</th>";
        
    // create table header
    for (var x = 0; x < clientNames.length; x++) {
        header += "<th>"+clientNames[x]+"</th>";
    }

    header+="</tr>";
    // create table body
    for (x = 0; x < clientNames.length; x++) {
        body += "<td>$"+balances[clientNames[x]]+"</td>";
    }
    body+="</tr>";

    // add contents to table
    var headerDiv = document.getElementById("balTH");
    var bodyDiv = document.getElementById("balTB");
    headerDiv.innerHTML = header;
    bodyDiv.innerHTML = body;
}

function getNames() {
    var names = []; // names array
    var name; // name

    while (name = window.prompt("Enter a client's name \n" +
        "or press cancel to exit ", "")) {

        // add name to array
        names[names.length] = name;
    }
    return names;
}