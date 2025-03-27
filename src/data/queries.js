const predefinedQueries = [
  {
    id: 1,
    name: "Top 5 Highest Revenue Products",
    query:
      "SELECT productName, ROUND(unitPrice * unitsInStock, 2) as totalRevenue FROM products ORDER BY totalRevenue DESC LIMIT 5",
    data: [
      { productName: "Côte de Blaye", totalRevenue: 4479.5 },
      { productName: "Boston Crab Meat", totalRevenue: 2263.2 },
      { productName: "Inlagd Sill", totalRevenue: 2128.0 },
      { productName: "Sasquatch Ale", totalRevenue: 1554.0 },
      { productName: "Lakkalikööri", totalRevenue: 1026.0 },
    ],
  },
  {
    id: 2,
    name: "Product Categories Performance",
    query:
      "SELECT categoryID, COUNT(*) as productCount, ROUND(AVG(unitPrice), 2) as avgPrice FROM products GROUP BY categoryID",
    data: [
      { categoryID: 1, productCount: 12, avgPrice: 34.23 },
      { categoryID: 2, productCount: 12, avgPrice: 22.58 },
      { categoryID: 3, productCount: 13, avgPrice: 26.47 },
      { categoryID: 4, productCount: 10, avgPrice: 28.51 },
      { categoryID: 5, productCount: 7, avgPrice: 21.35 },
      { categoryID: 6, productCount: 6, avgPrice: 54.33 },
      { categoryID: 7, productCount: 7, avgPrice: 32.59 },
      { categoryID: 8, productCount: 10, avgPrice: 25.49 },
    ],
  },
  {
    id: 3,
    name: "Inventory Value by Supplier",
    query:
      "SELECT supplierID, ROUND(SUM(unitPrice * unitsInStock), 2) as totalInventoryValue, COUNT(*) as productCount FROM products GROUP BY supplierID ORDER BY totalInventoryValue DESC LIMIT 5",
    data: [
      { supplierID: 12, totalInventoryValue: 4123.5, productCount: 5 },
      { supplierID: 14, totalInventoryValue: 2846.4, productCount: 4 },
      { supplierID: 7, totalInventoryValue: 2465.9, productCount: 5 },
      { supplierID: 15, totalInventoryValue: 2243.5, productCount: 4 },
      { supplierID: 6, totalInventoryValue: 1885.5, productCount: 4 },
    ],
  },
  {
    id: 4,
    name: "Products Needing Reorder",
    query:
      "SELECT productName, unitsInStock, reorderLevel FROM products WHERE unitsInStock <= reorderLevel LIMIT 5",
    data: [
      { productName: "Chang", unitsInStock: 17, reorderLevel: 25 },
      { productName: "Aniseed Syrup", unitsInStock: 13, reorderLevel: 25 },
      {
        productName: "Uncle Bob's Organic Dried Pears",
        unitsInStock: 15,
        reorderLevel: 10,
      },
      { productName: "Konbu", unitsInStock: 24, reorderLevel: 5 },
      { productName: "Genen Shouyu", unitsInStock: 39, reorderLevel: 5 },
    ],
  },
  {
    id: 5,
    name: "Price Range Distribution",
    query:
      "SELECT CASE WHEN unitPrice < 10 THEN 'Budget' WHEN unitPrice BETWEEN 10 AND 30 THEN 'Mid-Range' ELSE 'Premium' END as priceCategory, COUNT(*) as productCount FROM products GROUP BY priceCategory",
    data: [
      { priceCategory: "Budget", productCount: 15 },
      { priceCategory: "Mid-Range", productCount: 42 },
      { priceCategory: "Premium", productCount: 20 },
    ],
  },
  {
    id: 6,
    name: "Discontinued Products by Category",
    query:
      "SELECT categoryID, COUNT(*) as discontinuedCount FROM products WHERE discontinued = true GROUP BY categoryID",
    data: [
      { categoryID: 1, discontinuedCount: 2 },
      { categoryID: 2, discontinuedCount: 1 },
      { categoryID: 3, discontinuedCount: 0 },
      { categoryID: 6, discontinuedCount: 3 },
      { categoryID: 7, discontinuedCount: 1 },
    ],
  },
  {
    id: 7,
    name: "Top Products with High Order Volume",
    query:
      "SELECT productName, unitsOnOrder, unitPrice FROM products WHERE unitsOnOrder > 0 ORDER BY unitsOnOrder DESC LIMIT 5",
    data: [
      { productName: "Aniseed Syrup", unitsOnOrder: 70, unitPrice: 10.0 },
      { productName: "Queso Cabrales", unitsOnOrder: 30, unitPrice: 21.0 },
      { productName: "Sir Rodney's Scones", unitsOnOrder: 40, unitPrice: 10.0 },
      { productName: "Migliore Napoli", unitsOnOrder: 25, unitPrice: 15.5 },
      { productName: "Chang", unitsOnOrder: 40, unitPrice: 19.0 },
    ],
  },
  {
    id: 8,
    name: "Average Unit Price by Supplier",
    query:
      "SELECT supplierID, ROUND(AVG(unitPrice), 2) as avgUnitPrice, COUNT(*) as productCount FROM products GROUP BY supplierID ORDER BY avgUnitPrice DESC LIMIT 5",
    data: [
      { supplierID: 18, avgUnitPrice: 140.75, productCount: 2 },
      { supplierID: 7, avgUnitPrice: 39.0, productCount: 5 },
      { supplierID: 14, avgUnitPrice: 29.16, productCount: 4 },
      { supplierID: 12, avgUnitPrice: 27.7, productCount: 5 },
      { supplierID: 9, avgUnitPrice: 15.0, productCount: 2 },
    ],
  },
  {
    id: 9,
    name: "Products Close to Discontinuation",
    query:
      "SELECT productName, unitsInStock, unitsOnOrder, CASE WHEN unitsInStock = 0 AND unitsOnOrder = 0 THEN 'Likely Discontinued' ELSE 'At Risk' END as status FROM products WHERE (unitsInStock = 0 OR unitsOnOrder = 0) LIMIT 5",
    data: [
      {
        productName: "Chef Anton's Gumbo Mix",
        unitsInStock: 0,
        unitsOnOrder: 0,
        status: "Likely Discontinued",
      },
      {
        productName: "Gorgonzola Telino",
        unitsInStock: 0,
        unitsOnOrder: 70,
        status: "At Risk",
      },
      {
        productName: "Thüringer Rostbratwurst",
        unitsInStock: 0,
        unitsOnOrder: 0,
        status: "Likely Discontinued",
      },
      {
        productName: "Perth Pasties",
        unitsInStock: 0,
        unitsOnOrder: 0,
        status: "Likely Discontinued",
      },
      {
        productName: "Northwoods Cranberry Sauce",
        unitsInStock: 6,
        unitsOnOrder: 0,
        status: "At Risk",
      },
    ],
  },
  {
    id: 10,
    name: "Supplier Product Diversity",
    query:
      "SELECT supplierID, COUNT(DISTINCT categoryID) as categoryDiversity, COUNT(*) as totalProducts FROM products GROUP BY supplierID ORDER BY categoryDiversity DESC LIMIT 5",
    data: [
      { supplierID: 7, categoryDiversity: 4, totalProducts: 5 },
      { supplierID: 12, categoryDiversity: 3, totalProducts: 5 },
      { supplierID: 2, categoryDiversity: 3, totalProducts: 3 },
      { supplierID: 18, categoryDiversity: 2, totalProducts: 2 },
      { supplierID: 16, categoryDiversity: 2, totalProducts: 3 },
    ],
  },
];

export default predefinedQueries;
