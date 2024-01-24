var customers = [
  { id: 1, name: "Mogli", email: "mogli321@gmail.com", balance: 1000 },
  { id: 2, name: "Jaggu", email: "jaggu1@gmail.com", balance: 2000 },
  { id: 3, name: "Bheem", email: "bheem89@gmail.com", balance: 3000 },
  { id: 4, name: "Sheru", email: "sheru45@gmail.com", balance: 4000 },
  { id: 5, name: "Jimjam", email: "jimjam@gmail.com", balance: 5000 },
  { id: 6, name: "Tommy", email: "tommy@gmail.com", balance: 6000 },
  { id: 7, name: "Unkil", email: "unkil@gmail.com", balance: 7000 },
  { id: 8, name: "Matru", email: "matru@gmail.com", balance: 8000 },
  { id: 9, name: "Chutki", email: "chutki@gmail.com", balance: 9000 },
  { id: 10, name: "Laura", email: "laura@gmail.com", balance: 10000 }
  ];
 

  
  const transfers = [];

  const transferHistory = () => {
      const transferList = document.getElementById("transfer-list");
      transfers.forEach(transfer => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${transfer.sender}</td>
          <td>${transfer.recipient}</td>
          <td>${transfer.amount}</td>
        `;
        transferList.appendChild(row);
      });
    };
  
  const viewAllCustomersLink = document.getElementById("view-all-customers-link");
  
  viewAllCustomersLink.addEventListener("click", () => {
    window.location.href = "view_customers.html";
  });
  
  const displayCustomers = () => {
    const customerList = document.getElementById("customer-list");
    // clear any existing rows in the table
    customerList.innerHTML = '';
    customers.forEach(customer => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.balance}</td>
        <td>
          <button onclick="viewCustomer('${customer.name}')">View</button>
          <button onclick="transferMoney('${customer.name}')">Transfer</button>
        </td>
      `;
      customerList.appendChild(row);
    });
  };
  
  const viewCustomer = name => {
    const customer = customers.find(customer => customer.name === name);
    alert(`Name: ${customer.name}\nEmail: ${customer.email}\nBalance: ${customer.balance}`);
  };
  
  const transferMoney = sender => {
    const senderObj = customers.find(customer => customer.name === sender);
    const recipients = customers.filter(customer => customer.name !== sender);
    const recipientNames = recipients.map(customer => customer.name);
    const recipientName = prompt(`Transfer from ${sender}\nChoose recipient:\n${recipientNames.join("\n")}`);
    const recipient = customers.find(customer => customer.name === recipientName);
    if (!recipient) {
      alert(`Recipient "${recipientName}" not found in customer list`);
      return;
    }
    const amount = Number(prompt(`Transfer from ${sender}\nRecipient: ${recipientName}\nBalance: ${senderObj.balance}\nTransfer amount:`));
    
    if (amount > senderObj.balance) {
      alert("Insufficient balance.");
    } else {
      senderObj.balance -= amount;
      recipient.balance += amount;
      const transferObj = { sender: sender, recipient: recipientName, amount: amount, date: new Date() };
      transfers.push(transferObj);
      alert(`Transfer successful !\nSender: ${sender}\nRecipient: ${recipientName}\nAmount: ${amount}`);
    
      // Update the customer array with the new balances
      const senderIndex = customers.findIndex(customer => customer.name === sender);
      const recipientIndex = customers.findIndex(customer => customer.name === recipientName);
      customers[senderIndex].balance = senderObj.balance;
      customers[recipientIndex].balance = recipient.balance;
      
      // Re-render the customer list with the updated balances
      displayCustomers();
    }
    //Add transfer history to the transfer list
      transferHistory();
  };
  
  displayCustomers();
  
  
  // var transfers = [];
  
  // const transferHistory = () => {
  //   const transferList = document.getElementById("transfer-list");
  //   transfers.forEach(transfer => {
  //     const row = document.createElement("tr");
  //     row.innerHTML = `
  //       <td>${transfer.sender}</td>
  //       <td>${transfer.recipient}</td>
  //       <td>${transfer.amount}</td>
  //     `;
  //     transferList.appendChild(row);
  //   });
  // };
  
  // const viewAllCustomersLink = document.getElementById("view-all-customers-link");
  
  // viewAllCustomersLink.addEventListener("click", () => {
  //   window.location.href = "view_customers.html";
  // });
  
  // const displayCustomers = () => {
  //   const customerList = document.getElementById("customer-list");
  //   customers.forEach(customer => {
  //     const row = document.createElement("tr");
  //     row.innerHTML = `
  //       <td>${customer.name}</td>
  //       <td>${customer.email}</td>
  //       <td>${customer.balance}</td>
  //       <td>
  //         <button onclick="viewCustomer('${customer.name}')">View</button>
  //         <button onclick="transferMoney('${customer.name}')">Transfer</button>
  //       </td>
  //     `;
  //     customerList.appendChild(row);
  //   });
  // };
  
  // const viewCustomer = name => {
  //   const customer = customers.find(customer => customer.name === name);
  //   alert(`Name: ${customer.name}\nEmail: ${customer.email}\nBalance: ${customer.balance}`);
  // };
  
  // const transferMoney = sender => {
  //   const senderObj = customers.find(customer => customer.name === sender);
  //   console.log('senderObj:', senderObj);
  //   const recipients = customers.filter(customer => customer.name !== sender);
  //   const recipientNames = recipients.map(customer => customer.name);
  //   const recipientName = prompt(`Transfer from ${sender}\nChoose recipient:\n${recipientNames.join("\n")}`);
  //   const recipient = customers.find(customer => customer.name === recipientName);
  //   if (!recipient) {
  //     alert(`Recipient "${recipientName}" not found in customer list`);
  //     return;
  //   }
  //   const amount = Number(prompt(`Transfer from ${sender}\nRecipient: ${recipientName}\nBalance: ${senderObj.balance}\nTransfer amount:`));
  //   console.log('amount:', amount);
  
  //   if (amount > senderObj.balance) {
  //     alert("Insufficient balance.");
  //   } else {
  //     senderObj.balance -= amount;
  //     recipient.balance += amount;
  //     console.log(' recipient.balance:',  recipient.balance);
  //     const transferObj = { sender: sender, recipient: recipientName, amount: amount };
  //     console.log('transferObj:', transferObj);
  //     transfers.push(transferObj);
  //     alert(`Transfer successful !\nSender: ${sender}\nRecipient: ${recipientName}\nAmount: ${amount}`);
  
  //     /Update the customer array with the new balances
  //     const senderIndex = customers.findIndex(customer => customer.name === sender);
  //     const recipientIndex = customers.findIndex(customer => customer.name === recipientName);
  //     customers[senderIndex].balance = senderObj.balance;
  //     customers[recipientIndex].balance = recipient.balance;
  
  //      Add transfer history to the transfer list
  //     transferHistory();
  //   }
  // };
  
  //  displayCustomers();
  
