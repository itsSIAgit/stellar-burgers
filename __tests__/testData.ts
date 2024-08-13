export const rootReducerInitialStateTestData = {
  ingredients: {
    isIngredientsError: false,
    isIngredientsLoading: false,
    ingredients: []
  },
  orders: {
    isOrdersError: false,
    isOrdersLoading: false,
    ordersData: { orders: [], total: 0, totalToday: 0 }
  },
  burger: { bun: null, ingredients: [] },
  auth: { haveError: false, isAuthChecked: false, user: null },
  userOrders: {
    isUserOrdersError: false,
    isUserOrdersLoading: false,
    orderRequest: false,
    orderModalData: null,
    isOrderError: false,
    userOrders: []
  }
};

export const ingredientsTestData = [
  {
      "_id": "643d69a5c3f7b9001cfa093c",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0941",
      "name": "Биокотлета из марсианской Магнолии",
      "type": "main",
      "proteins": 420,
      "fat": 142,
      "carbohydrates": 242,
      "calories": 4242,
      "price": 424,
      "image": "https://code.s3.yandex.net/react/code/meat-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-01-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa093e",
      "name": "Филе Люминесцентного тетраодонтимформа",
      "type": "main",
      "proteins": 44,
      "fat": 26,
      "carbohydrates": 85,
      "calories": 643,
      "price": 988,
      "image": "https://code.s3.yandex.net/react/code/meat-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0942",
      "name": "Соус Spicy-X",
      "type": "sauce",
      "proteins": 30,
      "fat": 20,
      "carbohydrates": 40,
      "calories": 30,
      "price": 90,
      "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0943",
      "name": "Соус фирменный Space Sauce",
      "type": "sauce",
      "proteins": 50,
      "fat": 22,
      "carbohydrates": 11,
      "calories": 14,
      "price": 80,
      "image": "https://code.s3.yandex.net/react/code/sauce-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-04-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa093f",
      "name": "Мясо бессмертных моллюсков Protostomia",
      "type": "main",
      "proteins": 433,
      "fat": 244,
      "carbohydrates": 33,
      "calories": 420,
      "price": 1337,
      "image": "https://code.s3.yandex.net/react/code/meat-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0940",
      "name": "Говяжий метеорит (отбивная)",
      "type": "main",
      "proteins": 800,
      "fat": 800,
      "carbohydrates": 300,
      "calories": 2674,
      "price": 3000,
      "image": "https://code.s3.yandex.net/react/code/meat-04.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-04-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa093d",
      "name": "Флюоресцентная булка R2-D3",
      "type": "bun",
      "proteins": 44,
      "fat": 26,
      "carbohydrates": 85,
      "calories": 643,
      "price": 988,
      "image": "https://code.s3.yandex.net/react/code/bun-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0944",
      "name": "Соус традиционный галактический",
      "type": "sauce",
      "proteins": 42,
      "fat": 24,
      "carbohydrates": 42,
      "calories": 99,
      "price": 15,
      "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0945",
      "name": "Соус с шипами Антарианского плоскоходца",
      "type": "sauce",
      "proteins": 101,
      "fat": 99,
      "carbohydrates": 100,
      "calories": 100,
      "price": 88,
      "image": "https://code.s3.yandex.net/react/code/sauce-01.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-01-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0946",
      "name": "Хрустящие минеральные кольца",
      "type": "main",
      "proteins": 808,
      "fat": 689,
      "carbohydrates": 609,
      "calories": 986,
      "price": 300,
      "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0947",
      "name": "Плоды Фалленианского дерева",
      "type": "main",
      "proteins": 20,
      "fat": 5,
      "carbohydrates": 55,
      "calories": 77,
      "price": 874,
      "image": "https://code.s3.yandex.net/react/code/sp_1.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sp_1-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0948",
      "name": "Кристаллы марсианских альфа-сахаридов",
      "type": "main",
      "proteins": 234,
      "fat": 432,
      "carbohydrates": 111,
      "calories": 189,
      "price": 762,
      "image": "https://code.s3.yandex.net/react/code/core.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/core-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/core-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa0949",
      "name": "Мини-салат Экзо-Плантаго",
      "type": "main",
      "proteins": 1,
      "fat": 2,
      "carbohydrates": 3,
      "calories": 6,
      "price": 4400,
      "image": "https://code.s3.yandex.net/react/code/salad.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/salad-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/salad-large.png",
      "__v": 0
  },
  {
      "_id": "643d69a5c3f7b9001cfa094a",
      "name": "Сыр с астероидной плесенью",
      "type": "main",
      "proteins": 84,
      "fat": 48,
      "carbohydrates": 420,
      "calories": 3377,
      "price": 4142,
      "image": "https://code.s3.yandex.net/react/code/cheese.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/cheese-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/cheese-large.png",
      "__v": 0
  }
];

export const feedsResponseTestData = {
  "success": true,
  "orders": [
      {
          "_id": "66bb8af6119d45001b4ff7ce",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T16:33:58.057Z",
          "updatedAt": "2024-08-13T16:33:58.566Z",
          "number": 49580
      },
      {
          "_id": "66bb8a77119d45001b4ff7cc",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa0940",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Био-марсианский флюоресцентный люминесцентный метеоритный бургер",
          "createdAt": "2024-08-13T16:31:51.805Z",
          "updatedAt": "2024-08-13T16:31:52.268Z",
          "number": 49579
      },
      {
          "_id": "66bb6bca119d45001b4ff7a1",
          "ingredients": [
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa0940",
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный метеоритный бургер",
          "createdAt": "2024-08-13T14:20:58.465Z",
          "updatedAt": "2024-08-13T14:20:58.971Z",
          "number": 49578
      },
      {
          "_id": "66bb6af7119d45001b4ff79d",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный био-марсианский бургер",
          "createdAt": "2024-08-13T14:17:27.716Z",
          "updatedAt": "2024-08-13T14:17:28.194Z",
          "number": 49577
      },
      {
          "_id": "66bb6686119d45001b4ff793",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa093f",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный бессмертный био-марсианский бургер",
          "createdAt": "2024-08-13T13:58:30.854Z",
          "updatedAt": "2024-08-13T13:58:31.322Z",
          "number": 49576
      },
      {
          "_id": "66bb6583119d45001b4ff790",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:54:11.740Z",
          "updatedAt": "2024-08-13T13:54:12.214Z",
          "number": 49575
      },
      {
          "_id": "66bb655a119d45001b4ff78e",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0941",
              "643d69a5c3f7b9001cfa093f",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный бессмертный био-марсианский бургер",
          "createdAt": "2024-08-13T13:53:30.517Z",
          "updatedAt": "2024-08-13T13:53:31.005Z",
          "number": 49574
      },
      {
          "_id": "66bb6529119d45001b4ff78c",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:52:41.824Z",
          "updatedAt": "2024-08-13T13:52:42.328Z",
          "number": 49573
      },
      {
          "_id": "66bb645e119d45001b4ff78a",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный бургер",
          "createdAt": "2024-08-13T13:49:18.782Z",
          "updatedAt": "2024-08-13T13:49:19.327Z",
          "number": 49572
      },
      {
          "_id": "66bb5f22119d45001b4ff77e",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:26:58.851Z",
          "updatedAt": "2024-08-13T13:26:59.399Z",
          "number": 49571
      },
      {
          "_id": "66bb5db0119d45001b4ff778",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:20:48.324Z",
          "updatedAt": "2024-08-13T13:20:48.821Z",
          "number": 49570
      },
      {
          "_id": "66bb5d10119d45001b4ff776",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:18:08.199Z",
          "updatedAt": "2024-08-13T13:18:08.641Z",
          "number": 49569
      },
      {
          "_id": "66bb5cb4119d45001b4ff775",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:16:36.087Z",
          "updatedAt": "2024-08-13T13:16:36.512Z",
          "number": 49568
      },
      {
          "_id": "66bb5c76119d45001b4ff774",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T13:15:34.151Z",
          "updatedAt": "2024-08-13T13:15:34.604Z",
          "number": 49567
      },
      {
          "_id": "66bb5c00119d45001b4ff771",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:13:36.782Z",
          "updatedAt": "2024-08-13T13:13:37.328Z",
          "number": 49566
      },
      {
          "_id": "66bb5ada119d45001b4ff766",
          "ingredients": [
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa0942",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный spicy люминесцентный бургер",
          "createdAt": "2024-08-13T13:08:42.475Z",
          "updatedAt": "2024-08-13T13:08:45.682Z",
          "number": 49565
      },
      {
          "_id": "66bb5a8f119d45001b4ff761",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный бургер",
          "createdAt": "2024-08-13T13:07:27.429Z",
          "updatedAt": "2024-08-13T13:07:27.906Z",
          "number": 49564
      },
      {
          "_id": "66bb5a3a119d45001b4ff75f",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Space флюоресцентный бургер",
          "createdAt": "2024-08-13T13:06:02.741Z",
          "updatedAt": "2024-08-13T13:06:03.202Z",
          "number": 49563
      },
      {
          "_id": "66bb59a3119d45001b4ff75b",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T13:03:31.944Z",
          "updatedAt": "2024-08-13T13:03:32.886Z",
          "number": 49562
      },
      {
          "_id": "66bb5772119d45001b4ff759",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0943"
          ],
          "status": "done",
          "name": "Краторный space бургер",
          "createdAt": "2024-08-13T12:54:10.300Z",
          "updatedAt": "2024-08-13T12:54:10.708Z",
          "number": 49561
      },
      {
          "_id": "66bb54b3119d45001b4ff754",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:42:27.096Z",
          "updatedAt": "2024-08-13T12:42:27.624Z",
          "number": 49560
      },
      {
          "_id": "66bb546e119d45001b4ff753",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:41:18.440Z",
          "updatedAt": "2024-08-13T12:41:18.915Z",
          "number": 49559
      },
      {
          "_id": "66bb53f9119d45001b4ff74e",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:39:21.732Z",
          "updatedAt": "2024-08-13T12:39:22.188Z",
          "number": 49558
      },
      {
          "_id": "66bb5212119d45001b4ff74a",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T12:31:14.395Z",
          "updatedAt": "2024-08-13T12:31:14.903Z",
          "number": 49557
      },
      {
          "_id": "66bb518d119d45001b4ff749",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:29:01.454Z",
          "updatedAt": "2024-08-13T12:29:01.899Z",
          "number": 49556
      },
      {
          "_id": "66bb5168119d45001b4ff748",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T12:28:24.826Z",
          "updatedAt": "2024-08-13T12:28:25.294Z",
          "number": 49555
      },
      {
          "_id": "66bb4fa1119d45001b4ff746",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный бургер",
          "createdAt": "2024-08-13T12:20:49.116Z",
          "updatedAt": "2024-08-13T12:20:49.602Z",
          "number": 49554
      },
      {
          "_id": "66bb4f77119d45001b4ff744",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T12:20:07.527Z",
          "updatedAt": "2024-08-13T12:20:08.027Z",
          "number": 49553
      },
      {
          "_id": "66bb4f66119d45001b4ff742",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:19:50.817Z",
          "updatedAt": "2024-08-13T12:19:51.329Z",
          "number": 49552
      },
      {
          "_id": "66bb4f65119d45001b4ff741",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:19:49.826Z",
          "updatedAt": "2024-08-13T12:19:50.273Z",
          "number": 49551
      },
      {
          "_id": "66bb4ef7119d45001b4ff73f",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:17:59.990Z",
          "updatedAt": "2024-08-13T12:18:00.493Z",
          "number": 49550
      },
      {
          "_id": "66bb4ccd119d45001b4ff73d",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa094a"
          ],
          "status": "done",
          "name": "Краторный space астероидный бургер",
          "createdAt": "2024-08-13T12:08:45.210Z",
          "updatedAt": "2024-08-13T12:08:45.703Z",
          "number": 49549
      },
      {
          "_id": "66bb4cb7119d45001b4ff73b",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T12:08:23.925Z",
          "updatedAt": "2024-08-13T12:08:24.403Z",
          "number": 49548
      },
      {
          "_id": "66bb4bab119d45001b4ff73a",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный бургер",
          "createdAt": "2024-08-13T12:03:55.753Z",
          "updatedAt": "2024-08-13T12:03:56.213Z",
          "number": 49547
      },
      {
          "_id": "66bb4b60119d45001b4ff737",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0949",
              "643d69a5c3f7b9001cfa0946",
              "643d69a5c3f7b9001cfa0946",
              "643d69a5c3f7b9001cfa0946",
              "643d69a5c3f7b9001cfa0946"
          ],
          "status": "done",
          "name": "Краторный экзо-плантаго минеральный бургер",
          "createdAt": "2024-08-13T12:02:40.404Z",
          "updatedAt": "2024-08-13T12:02:40.864Z",
          "number": 49546
      },
      {
          "_id": "66bb4b3b119d45001b4ff736",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный бургер",
          "createdAt": "2024-08-13T12:02:03.535Z",
          "updatedAt": "2024-08-13T12:02:04.021Z",
          "number": 49545
      },
      {
          "_id": "66bb4ac5119d45001b4ff730",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa0945"
          ],
          "status": "done",
          "name": "Краторный space антарианский бургер",
          "createdAt": "2024-08-13T12:00:05.578Z",
          "updatedAt": "2024-08-13T12:00:13.364Z",
          "number": 49544
      },
      {
          "_id": "66bb49f6119d45001b4ff72e",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa0946",
              "643d69a5c3f7b9001cfa0942",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный spicy минеральный бургер",
          "createdAt": "2024-08-13T11:56:38.218Z",
          "updatedAt": "2024-08-13T11:56:38.626Z",
          "number": 49543
      },
      {
          "_id": "66bb49d6119d45001b4ff72d",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T11:56:06.496Z",
          "updatedAt": "2024-08-13T11:56:06.923Z",
          "number": 49542
      },
      {
          "_id": "66bb49ae119d45001b4ff72b",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:55:26.862Z",
          "updatedAt": "2024-08-13T11:55:27.383Z",
          "number": 49541
      },
      {
          "_id": "66bb48dc119d45001b4ff728",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa0943",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Space флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:51:56.974Z",
          "updatedAt": "2024-08-13T11:51:57.465Z",
          "number": 49540
      },
      {
          "_id": "66bb475c119d45001b4ff727",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:45:32.468Z",
          "updatedAt": "2024-08-13T11:45:34.775Z",
          "number": 49539
      },
      {
          "_id": "66bb470b119d45001b4ff726",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:44:11.383Z",
          "updatedAt": "2024-08-13T11:44:12.665Z",
          "number": 49538
      },
      {
          "_id": "66bb4666119d45001b4ff723",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:41:26.192Z",
          "updatedAt": "2024-08-13T11:41:27.681Z",
          "number": 49537
      },
      {
          "_id": "66bb450f119d45001b4ff71f",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:35:43.657Z",
          "updatedAt": "2024-08-13T11:35:44.100Z",
          "number": 49536
      },
      {
          "_id": "66bb4416119d45001b4ff71b",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:31:34.668Z",
          "updatedAt": "2024-08-13T11:31:35.193Z",
          "number": 49535
      },
      {
          "_id": "66bb434d119d45001b4ff719",
          "ingredients": [
              "643d69a5c3f7b9001cfa093c",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093c"
          ],
          "status": "done",
          "name": "Краторный люминесцентный бургер",
          "createdAt": "2024-08-13T11:28:13.329Z",
          "updatedAt": "2024-08-13T11:28:13.781Z",
          "number": 49534
      },
      {
          "_id": "66bb42fa119d45001b4ff718",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa093d"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:26:50.368Z",
          "updatedAt": "2024-08-13T11:26:50.823Z",
          "number": 49533
      },
      {
          "_id": "66bb3ced119d45001b4ff711",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e",
              "643d69a5c3f7b9001cfa0949"
          ],
          "status": "done",
          "name": "Экзо-плантаго флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T11:01:01.391Z",
          "updatedAt": "2024-08-13T11:01:01.896Z",
          "number": 49532
      },
      {
          "_id": "66bb37c8119d45001b4ff70b",
          "ingredients": [
              "643d69a5c3f7b9001cfa093d",
              "643d69a5c3f7b9001cfa093e"
          ],
          "status": "done",
          "name": "Флюоресцентный люминесцентный бургер",
          "createdAt": "2024-08-13T10:39:04.681Z",
          "updatedAt": "2024-08-13T10:39:05.238Z",
          "number": 49531
      }
  ],
  "total": 49206,
  "totalToday": 93
}

export const userOrdersResponseTestData = {
	"success": true,
	"orders": [
		{
			"_id": "66a06fa9119d45001b4fb37c",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093e"
			],
			"status": "done",
			"name": "Флюоресцентный люминесцентный бургер",
			"createdAt": "2024-07-24T03:06:17.544Z",
			"updatedAt": "2024-07-24T03:06:17.995Z",
			"number": 47112
		},
		{
			"_id": "66a07005119d45001b4fb37d",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0941"
			],
			"status": "done",
			"name": "Краторный био-марсианский бургер",
			"createdAt": "2024-07-24T03:07:49.621Z",
			"updatedAt": "2024-07-24T03:07:50.097Z",
			"number": 47113
		},
		{
			"_id": "66a07166119d45001b4fb37e",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa093f"
			],
			"status": "done",
			"name": "Краторный бессмертный бургер",
			"createdAt": "2024-07-24T03:13:43.000Z",
			"updatedAt": "2024-07-24T03:13:43.579Z",
			"number": 47114
		},
		{
			"_id": "66a072f2119d45001b4fb380",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa0946"
			],
			"status": "done",
			"name": "Краторный минеральный фалленианский бургер",
			"createdAt": "2024-07-24T03:20:18.068Z",
			"updatedAt": "2024-07-24T03:20:18.529Z",
			"number": 47115
		},
		{
			"_id": "66a07426119d45001b4fb384",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa0940",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Фалленианский краторный бессмертный минеральный метеоритный бургер",
			"createdAt": "2024-07-24T03:25:26.760Z",
			"updatedAt": "2024-07-24T03:25:27.199Z",
			"number": 47116
		},
		{
			"_id": "66a0765f119d45001b4fb38b",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный бессмертный бургер",
			"createdAt": "2024-07-24T03:34:55.710Z",
			"updatedAt": "2024-07-24T03:34:56.134Z",
			"number": 47117
		},
		{
			"_id": "66a0778b119d45001b4fb38d",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный минеральный бургер",
			"createdAt": "2024-07-24T03:39:55.232Z",
			"updatedAt": "2024-07-24T03:39:55.719Z",
			"number": 47118
		},
		{
			"_id": "66a077c7119d45001b4fb38e",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный бессмертный бургер",
			"createdAt": "2024-07-24T03:40:55.088Z",
			"updatedAt": "2024-07-24T03:40:55.533Z",
			"number": 47119
		},
		{
			"_id": "66a07cc2119d45001b4fb393",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa0940",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa0948",
				"643d69a5c3f7b9001cfa0949",
				"643d69a5c3f7b9001cfa094a",
				"643d69a5c3f7b9001cfa0942",
				"643d69a5c3f7b9001cfa0943",
				"643d69a5c3f7b9001cfa0945",
				"643d69a5c3f7b9001cfa0944",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Антарианский space астероидный фалленианский краторный люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер",
			"createdAt": "2024-07-24T04:02:10.771Z",
			"updatedAt": "2024-07-24T04:02:11.216Z",
			"number": 47120
		},
		{
			"_id": "66a07f50119d45001b4fb397",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный люминесцентный бургер",
			"createdAt": "2024-07-24T04:13:04.992Z",
			"updatedAt": "2024-07-24T04:13:05.410Z",
			"number": 47121
		},
		{
			"_id": "66a09133119d45001b4fb3b4",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa094a",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Астероидный фалленианский краторный минеральный люминесцентный бургер",
			"createdAt": "2024-07-24T05:29:23.737Z",
			"updatedAt": "2024-07-24T05:29:24.188Z",
			"number": 47123
		},
		{
			"_id": "66a0a359119d45001b4fb3e0",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный минеральный люминесцентный бессмертный бургер",
			"createdAt": "2024-07-24T06:46:49.989Z",
			"updatedAt": "2024-07-24T06:46:50.493Z",
			"number": 47129
		},
		{
			"_id": "66a0a3a3119d45001b4fb3e1",
			"ingredients": [
				"643d69a5c3f7b9001cfa093d",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa0940",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa0948",
				"643d69a5c3f7b9001cfa0949",
				"643d69a5c3f7b9001cfa094a",
				"643d69a5c3f7b9001cfa0942",
				"643d69a5c3f7b9001cfa0943",
				"643d69a5c3f7b9001cfa0944",
				"643d69a5c3f7b9001cfa0945",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa093e",
				"643d69a5c3f7b9001cfa093f",
				"643d69a5c3f7b9001cfa0940",
				"643d69a5c3f7b9001cfa0946",
				"643d69a5c3f7b9001cfa0947",
				"643d69a5c3f7b9001cfa0948",
				"643d69a5c3f7b9001cfa0949",
				"643d69a5c3f7b9001cfa094a",
				"643d69a5c3f7b9001cfa0942",
				"643d69a5c3f7b9001cfa0943",
				"643d69a5c3f7b9001cfa0944",
				"643d69a5c3f7b9001cfa0945",
				"643d69a5c3f7b9001cfa093d"
			],
			"status": "done",
			"name": "Флюоресцентный антарианский space астероидный фалленианский люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер",
			"createdAt": "2024-07-24T06:48:03.983Z",
			"updatedAt": "2024-07-24T06:48:04.507Z",
			"number": 47130
		},
		{
			"_id": "66ba6162119d45001b4ff603",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Краторный био-марсианский бургер",
			"createdAt": "2024-08-12T19:24:18.744Z",
			"updatedAt": "2024-08-12T19:24:19.224Z",
			"number": 49496
		},
		{
			"_id": "66ba61f5119d45001b4ff605",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa0942",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Краторный spicy био-марсианский бургер",
			"createdAt": "2024-08-12T19:26:45.284Z",
			"updatedAt": "2024-08-12T19:26:45.795Z",
			"number": 49498
		},
		{
			"_id": "66ba66f2119d45001b4ff614",
			"ingredients": [
				"643d69a5c3f7b9001cfa093c",
				"643d69a5c3f7b9001cfa0941",
				"643d69a5c3f7b9001cfa0942",
				"643d69a5c3f7b9001cfa093c"
			],
			"status": "done",
			"name": "Краторный spicy био-марсианский бургер",
			"createdAt": "2024-08-12T19:48:02.214Z",
			"updatedAt": "2024-08-12T19:48:02.684Z",
			"number": 49505
		}
	],
	"total": 49207,
	"totalToday": 91
}

export const orderResponseTestData = {
	"success": true,
	"name": "Краторный минеральный бургер",
	"order": {
		"ingredients": [
			{
				"_id": "643d69a5c3f7b9001cfa093c",
				"name": "Краторная булка N-200i",
				"type": "bun",
				"proteins": 80,
				"fat": 24,
				"carbohydrates": 53,
				"calories": 420,
				"price": 1255,
				"image": "https://code.s3.yandex.net/react/code/bun-02.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa0946",
				"name": "Хрустящие минеральные кольца",
				"type": "main",
				"proteins": 808,
				"fat": 689,
				"carbohydrates": 609,
				"calories": 986,
				"price": 300,
				"image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
				"__v": 0
			},
			{
				"_id": "643d69a5c3f7b9001cfa093c",
				"name": "Краторная булка N-200i",
				"type": "bun",
				"proteins": 80,
				"fat": 24,
				"carbohydrates": 53,
				"calories": 420,
				"price": 1255,
				"image": "https://code.s3.yandex.net/react/code/bun-02.png",
				"image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
				"image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
				"__v": 0
			}
		],
		"_id": "66bb9d9c119d45001b4ff7fb",
		"owner": {
			"name": "TEST",
			"email": "TEST@yandex.ru",
			"createdAt": "2024-07-23T03:25:20.725Z",
			"updatedAt": "2024-07-24T04:00:54.462Z"
		},
		"status": "done",
		"name": "Краторный минеральный бургер",
		"createdAt": "2024-08-13T17:53:32.846Z",
		"updatedAt": "2024-08-13T17:53:33.337Z",
		"number": 49582,
		"price": 2810
	}
}