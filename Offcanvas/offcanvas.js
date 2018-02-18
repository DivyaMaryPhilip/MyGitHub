var menu = [{
        "north_indian": ["Amritsari Chole Bhature", "Rajasthani Dal", " Bati Churma", "Malai ki Kheer", "Aloo Paratha", "Aloo Samosa", "Almond Malai Kulfi", "Rajma Chawal", "Palak Paneer", "Mutter Paneer", "Karela Masaledar", "Mushroom Malai", "Aloo Ghobi", "Aloo Parwal Ki Sabji", "Baigan Bharta", "Pindi Chana", "Hara Chana Masala"]
    },
    {
        "south_indian": ["Appam", "Andra Dum Biriyani", "Kesari bath", "Avial", "Ada Payasam", "Idli Vada", "Masala Dosa", "Lemon rice", "Pulliogere", "Palappam", "Upma", "Set Dosa", "Neer Dosa", "Bisi bele bath"]
    },
    {
        "Chinese": ["Spring Rolls", "Steamed Stuffed Buns", "Rice Pudding", "Red Bean Cake", "Fruit soup", "Fruit soup", "Sesame Fritters", "Water Chestnut Cake", "Almond Cookies", "Five - Spice Peanuts", "Preserved Kumquats", "Mooncake", "Pineapple Cake", "Banana Fritters", "Chinese Raspberry Snowflake Cake", "Chinese Steamed Sponge Cake"]
    },
    {
        "Italian": ["Wedge Salad", "Caprese Salad with Pesto Sauce", "Panzanella", "Mushroom Risotto", "Four Cheese Pasta", "Baked Pasta", "Corn Cannelloni", "Pasta Con Pomodoro e Basilico", "Italian Bread and Sause", "Chocolate - and - Pistachio Biscotti", "Torrone Semifreddo", "Zabaglione with Strawberries", "Almond Cake with Pears", "White Peach Tart", "Raspberry Jam", "Italian Trifle"]
    }
];

alert("Welcome to Divya's Restaurant...");
var mymenu = prompt("Please enter the food you wish to order either from our menu or any other food that you desire to have");
var myorder = function(mymenu) {

    alert("Thank you for placing your order.....You have chosen" + " " + mymenu+ " "+"Your food will arrive shortly.Thank you for your patience");

};
myorder(mymenu);