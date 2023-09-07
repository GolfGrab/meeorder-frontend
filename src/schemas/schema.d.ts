/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/health/ping": {
    get: operations["HealthController_getPing"];
  };
  "/categories": {
    /** Get all categories */
    get: operations["CategoriesController_getAllCategories"];
    /** Create a category */
    post: operations["CategoriesController_createCategory"];
  };
  "/categories/{id}": {
    /** Get a category by id */
    get: operations["CategoriesController_getCategory"];
    /** Delete a category by id */
    delete: operations["CategoriesController_deleteCategory"];
    /** Replace a category by id */
    patch: operations["CategoriesController_updateCategory"];
  };
  "/categories/rank": {
    /** order the categories' rank */
    patch: operations["CategoriesController_updateRank"];
  };
  "/addons": {
    /** Get all addons */
    get: operations["AddonsController_getAllAddons"];
    /** Create a addon */
    post: operations["AddonsController_createAddon"];
  };
  "/addons/{id}": {
    /** Get a addon by id */
    get: operations["AddonsController_getAddon"];
    /** Replace a addon by id */
    put: operations["AddonsController_updateAddon"];
    /** Delete a addon by id */
    delete: operations["AddonsController_deleteAddon"];
  };
  "/menus": {
    get: operations["MenusController_getMenus"];
    /** Create a menu */
    post: operations["MenusController_createMenu"];
    /**
     * Delete menus by ids
     * @description Delete many menus
     */
    delete: operations["MenusController_removeMenus"];
  };
  "/menus/{id}": {
    /** Get a menu by id */
    get: operations["MenusController_getMenuById"];
    /** Replace a menu by id */
    put: operations["MenusController_updateMenuById"];
    /** Delete a menu by id */
    delete: operations["MenusController_removeMenuById"];
  };
  "/menus/{id}/publish": {
    /** Publish a menu by id */
    patch: operations["MenusController_publishMenuById"];
  };
  "/menus/{id}/unpublish": {
    /** Unpublish a menu by id */
    patch: operations["MenusController_unpublishMenuById"];
  };
  "/orders": {
    /** Get all orders */
    get: operations["OrdersController_getOrders"];
    /** Create order */
    post: operations["OrdersController_createOrder"];
  };
  "/orders/{id}/preparing": {
    /** Change order status to preparing */
    patch: operations["OrdersController_preparing"];
  };
  "/orders/{id}/ready_to_serve": {
    /** Change order status to ready to serve */
    patch: operations["OrdersController_readyToServe"];
  };
  "/orders/{id}/done": {
    /** Change order status to done */
    patch: operations["OrdersController_done"];
  };
  "/orders/{id}/cancel": {
    /** Cancel order */
    patch: operations["OrdersController_cancel"];
  };
  "/sessions": {
    /** Get all sessions */
    get: operations["SessionController_getSessions"];
    /** Create a session */
    post: operations["SessionController_createSession"];
  };
  "/sessions/{id}": {
    /** Get a session by id */
    get: operations["SessionController_getSession"];
    /** Delete a session by id */
    delete: operations["SessionController_deleteSession"];
  };
  "/sessions/table/{id}": {
    /** Get a session by table id */
    get: operations["SessionController_getSessionByTable"];
  };
  "/sessions/{id}/finish": {
    /** Finish a session */
    patch: operations["SessionController_finishSession"];
  };
  "/sessions/{id}/orders": {
    /** Get orders by session */
    get: operations["SessionController_getOrdersBySession"];
  };
  "/sessions/{id}/user": {
    /** Updated session user */
    patch: operations["SessionController_updateSessionUser"];
  };
  "/sessions/{id}/coupon/all": {
    /** Get all useable coupon */
    get: operations["SessionController_getCoupons"];
  };
  "/sessions/{id}/coupon": {
    /** Update coupon in session */
    patch: operations["SessionController_updateSessionCoupon"];
  };
  "/tables": {
    /** Get all tables */
    get: operations["TablesController_getTables"];
    /** Create a table */
    post: operations["TablesController_createTable"];
  };
  "/auth/login": {
    /** Login */
    post: operations["AuthController_signIn"];
  };
  "/auth/logout": {
    /** Logout */
    post: operations["AuthController_signOut"];
  };
  "/auth/register": {
    /** Customer's registraion */
    post: operations["AuthController_register"];
  };
  "/auth/me": {
    /** Get current user */
    get: operations["AuthController_getMe"];
  };
  "/users": {
    /** Get users */
    get: operations["UsersController_getUsers"];
    /** Create user (for Owner) */
    post: operations["UsersController_createUser"];
    /** Delete user */
    delete: operations["UsersController_deleteUser"];
  };
  "/users/reset/password": {
    /** Reset user password */
    post: operations["UsersController_updateUser"];
  };
  "/coupons": {
    /** Get all coupons (Owner) */
    get: operations["CouponsController_findAll"];
    /** Create a coupon */
    post: operations["CouponsController_create"];
  };
  "/coupons/{id}": {
    /** Get a coupon by id */
    get: operations["CouponsController_findOne"];
    /** Delete a coupon by id */
    delete: operations["CouponsController_remove"];
    /** Update a coupon by id */
    patch: operations["CouponsController_update"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    HealthResponseDto: {
      msg: Record<string, never>;
    };
    CreateCategoryDto: {
      /** @description Category title */
      title: string;
    };
    CategorySchema: {
      /** @description Category ID */
      _id: string;
      /** @description Category title */
      title: string;
      /** @description List of Menu */
      menus: string[];
      /** @description Category rank */
      rank: number | null;
    };
    UpdateCategoryDto: {
      /** @description Category title */
      title?: string;
      menus?: string[];
    };
    RankDto: {
      /** @description Ordered Rank ID */
      rank: string[];
    };
    CreateAddonDto: {
      title: string;
      price: number;
    };
    AddonSchema: {
      /** @description Addon ID */
      _id: string;
      /** @description Addon Title */
      title: string;
      /** @description Addon Price */
      price: number;
      /**
       * Format: date-time
       * @description Addon deletion date
       */
      deleted_at: string | null;
    };
    MenuDtoForAllMenu: {
      /** @description Menu ID */
      _id: string;
      /** @description Menu Image */
      image: string | null;
      /** @description Menu Title */
      title: string;
      /** @description Menu Description */
      description: string | null;
      /** @description Menu Price */
      price: number;
      /** @description Menu Addons */
      addons: components["schemas"]["AddonSchema"][];
      /**
       * Format: date-time
       * @description Menu Published Date
       */
      published_at: string;
      /**
       * Format: date-time
       * @description Menu Deleted Date
       */
      deleted_at: string | null;
    };
    GetAllMenuResponseDto: {
      /** @description Menu's Category */
      category: components["schemas"]["CategorySchema"];
      /** @description Array of all menu in category */
      menus: components["schemas"]["MenuDtoForAllMenu"][];
    };
    GetMenuByIdResponseDto: {
      /** @description Menu ID */
      _id: string;
      /** @description Menu Image */
      image: string | null;
      /** @description Menu Title */
      title: string;
      /** @description Menu Description */
      description: string | null;
      /** @description Menu Price */
      price: number;
      /** @description Menu Category */
      category: components["schemas"]["CategorySchema"];
      /** @description Menu Addons */
      addons: components["schemas"]["AddonSchema"][];
      /**
       * Format: date-time
       * @description Menu Published Date
       */
      published_at: string;
      /**
       * Format: date-time
       * @description Menu Deleted Date
       */
      deleted_at: string | null;
    };
    CreateMenuDto: {
      /** @description Menu Image */
      image: string | null;
      /** @description Menu Title */
      title: string;
      /** @description Menu Description */
      description: string | null;
      /** @description Menu Price */
      price: number;
      /** @description Menu Category */
      category: string;
      /** @description Menu Addons */
      addons: string[];
    };
    MenuSchema: {
      /** @description Menu ID */
      _id: string;
      /** @description Menu image */
      image: string | null;
      /** @description Menu title */
      title: string;
      /** @description Menu description */
      description: string | null;
      /** @description Menu price */
      price: number;
      /** @description Menu category */
      category: components["schemas"]["CategorySchema"] | null;
      /** @description Menu addons */
      addons: string[];
      /**
       * Format: date-time
       * @description Menu publication date
       */
      published_at: string;
      /**
       * Format: date-time
       * @description Menu deletion date
       */
      deleted_at: string | null;
    };
    Orders: {
      /** @description menu is ObjectID */
      menu: string;
      /** @description Array of ObjectID */
      addons?: string[];
      additional_info?: string;
    };
    CreateOrderDto: {
      /** @description session is ObjectID */
      session: string;
      orders: components["schemas"]["Orders"][];
    };
    SessionSchema: {
      /** @description Session ID */
      _id: string;
      /**
       * Format: date-time
       * @description Session creation date
       */
      created_at: string;
      /**
       * Format: date-time
       * @description Session finish date
       */
      finished_at: string | null;
      /** @description User ID */
      user: string | null;
      /** @description User point */
      point: number;
      /** @description Coupon ID */
      coupon: string | null;
      /** @description Table ID */
      table: string;
      /**
       * Format: date-time
       * @description Session deletion date
       */
      deleted_at: string | null;
    };
    OrderGetDto: {
      /** @description Orders ID */
      _id: string;
      /** Format: date-time */
      created_at: string;
      /** @enum {string} */
      status: "IN_QUEUE" | "PREPARING" | "READY_TO_SERVE" | "DONE";
      /** @description Array of MenuID */
      addons: string[];
      /** @description Additional info */
      additional_info: string;
      /**
       * Format: date-time
       * @description for cancel status
       */
      cancelled_at: string;
      session: components["schemas"]["SessionSchema"];
      menu: components["schemas"]["MenuSchema"];
    };
    CreateSessionDto: {
      /** @description User ID */
      user?: string;
      /** @description Table ID */
      table: string;
    };
    MenusResponseDto: {
      /** @description Menu ID */
      _id: string;
      /** @description Menu image */
      image: string | null;
      /** @description Menu title */
      title: string;
      /** @description Menu description */
      description: string | null;
      /** @description Menu price */
      price: number;
      /** @description Menu category */
      category: string;
      /** @description Menu addons */
      addons: string[];
      /**
       * Format: date-time
       * @description Menu publication date
       */
      published_at: string;
      /**
       * Format: date-time
       * @description Menu deletion date
       */
      deleted_at: string | null;
    };
    OrdersResponseDto: {
      /** @description Order ID (ObjectID) */
      _id: string;
      /** Format: date-time */
      created_at: string;
      /** @enum {string} */
      status: "IN_QUEUE" | "PREPARING" | "READY_TO_SERVE" | "DONE";
      /** @description Session ID */
      session: string;
      /** @description Menu Schema */
      menu: components["schemas"]["MenusResponseDto"];
      /** @description Array of Addons Schema */
      addons: components["schemas"]["AddonSchema"][];
      /** @description Additional info */
      additional_info: string | null;
      /**
       * Format: date-time
       * @description for cancel status
       */
      cancelled_at: string;
    };
    OrdersListDto: {
      /** @description table id */
      table: string;
      /** @description total price */
      total_price: number;
      /** @description discount price */
      discount_price: number;
      /** @description net price */
      net_price: number;
      orders: components["schemas"]["OrdersResponseDto"][];
    };
    SessionUserUpdateDto: {
      /** @description User ID */
      user: string;
    };
    ExampleCouponDto: {
      /** @description Coupon ID */
      _id: string;
      /** @description Coupon title */
      title: string;
      /** @description Coupon description */
      description: string;
      /** @description Coupon required menus */
      required_menus: string[];
      /** @description Discount price of the coupon */
      price: number;
      /** @description Amount of coupon */
      amount: number;
      /** @description Coupon status */
      activated: boolean;
      /** @description Coupon required point */
      required_point: number;
      /** @description isUseable */
      isuseable: boolean;
    };
    UpdateSessionCouponDto: {
      /** @description Coupon ID */
      coupon_id: string | null;
    };
    TablesDto: {
      /** @description Table number */
      table_number: number;
    };
    TablesSchema: {
      /** @description Table ID */
      _id: string;
      /** @description Table number */
      table_number: number;
    };
    LoginDto: {
      username: string;
      password: string;
    };
    LoginResponseDto: {
      /**
       * @description JWT access token
       * @example eyJ ...
       */
      access_token: string;
    };
    RegisterDto: {
      username: string;
      password: string;
    };
    UserResponseDto: {
      /** @description User ID */
      _id: string;
      /** @description Username */
      username: string;
      /** @description Role of user */
      role: string;
      point: number;
    };
    CreateUserDto: {
      /** @description Username */
      username: string;
      /** @description Password */
      password: string;
      /**
       * @description select role from enum UserRole example: Owner, Chef, Cashier, Employee, Customer
       * @example [
       *   "Owner",
       *   "Chef",
       *   "Cashier",
       *   "Employee",
       *   "Customer"
       * ]
       * @enum {number}
       */
      role: 100 | 50 | 25 | 1;
    };
    UserSchema: {
      /** @description User ID */
      _id: string;
      /** @description User name */
      username: string;
      /** @description User point */
      point: number;
      /**
       * @description User role
       * @enum {number}
       */
      role: 100 | 50 | 25 | 1;
      /**
       * Format: date-time
       * @description User creation date
       * @default 2023-09-07T09:36:27.457Z
       */
      created_at: string;
      /**
       * Format: date-time
       * @description User deletion date
       */
      deleted_at: string | null;
    };
    CreateCouponDto: {
      /** @description Coupon Code */
      title: string;
      /** @description Coupon Description */
      description?: string;
      required_menus?: string[];
      /** @description Discount Price of Coupon */
      price: number;
      /** @description Amount of Coupon */
      amount?: number;
      /** @description Coupon status */
      activated: number;
      /** @description Coupon Required Point */
      required_point?: number;
    };
    UpdateCouponDto: {
      /** @description Coupon Code */
      title?: string;
      /** @description Coupon Description */
      description?: string;
      required_menus?: string[];
      /** @description Discount Price of Coupon */
      price?: number;
      /** @description Amount of Coupon */
      amount?: number;
      /** @description Coupon status */
      activated?: number;
      /** @description Coupon Required Point */
      required_point?: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  HealthController_getPing: {
    responses: {
      /** @description Health status */
      200: {
        content: {
          "application/json": components["schemas"]["HealthResponseDto"];
        };
      };
    };
  };
  /** Get all categories */
  CategoriesController_getAllCategories: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CategorySchema"][];
        };
      };
    };
  };
  /** Create a category */
  CategoriesController_createCategory: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCategoryDto"];
      };
    };
    responses: {
      /** @description Created new category */
      201: {
        content: {
          "application/json": components["schemas"]["CreateCategoryDto"];
        };
      };
    };
  };
  /** Get a category by id */
  CategoriesController_getCategory: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CategorySchema"];
        };
      };
      /** @description Category not found */
      404: never;
    };
  };
  /** Delete a category by id */
  CategoriesController_deleteCategory: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      204: never;
      /** @description Category not found */
      404: never;
    };
  };
  /** Replace a category by id */
  CategoriesController_updateCategory: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateCategoryDto"];
      };
    };
    responses: {
      /** @description Update category */
      200: {
        content: {
          "application/json": components["schemas"]["UpdateCategoryDto"];
        };
      };
      /** @description Category not found */
      404: never;
    };
  };
  /** order the categories' rank */
  CategoriesController_updateRank: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RankDto"];
      };
    };
    responses: {
      /** @description Change category rank */
      204: never;
    };
  };
  /** Get all addons */
  AddonsController_getAllAddons: {
    parameters: {
      query: {
        status: "active" | "all";
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AddonSchema"][];
        };
      };
    };
  };
  /** Create a addon */
  AddonsController_createAddon: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAddonDto"];
      };
    };
    responses: {
      /** @description Created addon */
      201: {
        content: {
          "application/json": components["schemas"]["CreateAddonDto"];
        };
      };
    };
  };
  /** Get a addon by id */
  AddonsController_getAddon: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["AddonSchema"];
        };
      };
      /** @description Addon not found */
      404: never;
    };
  };
  /** Replace a addon by id */
  AddonsController_updateAddon: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAddonDto"];
      };
    };
    responses: {
      /** @description Updated addon */
      200: {
        content: {
          "application/json": components["schemas"]["CreateAddonDto"];
        };
      };
      /** @description Addon not found */
      404: never;
    };
  };
  /** Delete a addon by id */
  AddonsController_deleteAddon: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      204: never;
      /** @description Addon not found */
      404: never;
    };
  };
  MenusController_getMenus: {
    parameters: {
      query: {
        status: "published" | "draft" | "all";
      };
    };
    responses: {
      /** @description Get all menus */
      200: {
        content: {
          "application/json": components["schemas"]["GetAllMenuResponseDto"][];
        };
      };
    };
  };
  /** Create a menu */
  MenusController_createMenu: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateMenuDto"];
      };
    };
    responses: {
      /** @description The menu has been successfully created. */
      201: {
        content: {
          "application/json": components["schemas"]["MenuSchema"];
        };
      };
    };
  };
  /**
   * Delete menus by ids
   * @description Delete many menus
   */
  MenusController_removeMenus: {
    parameters: {
      query: {
        ids: string[];
      };
    };
    responses: {
      /** @description The menus have been successfully deleted. */
      200: never;
      /** @description No menu found */
      204: never;
    };
  };
  /** Get a menu by id */
  MenusController_getMenuById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["GetMenuByIdResponseDto"];
        };
      };
      /** @description No menu found */
      404: never;
    };
  };
  /** Replace a menu by id */
  MenusController_updateMenuById: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateMenuDto"];
      };
    };
    responses: {
      /** @description The menu has been successfully updated. */
      200: never;
      /** @description No menu found */
      404: never;
    };
  };
  /** Delete a menu by id */
  MenusController_removeMenuById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The menu has been successfully deleted. */
      200: never;
      /** @description No menu found */
      204: never;
    };
  };
  /** Publish a menu by id */
  MenusController_publishMenuById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The menu has been successfully published. */
      200: never;
      /** @description No menu found */
      404: never;
    };
  };
  /** Unpublish a menu by id */
  MenusController_unpublishMenuById: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description The menu has been successfully unpublished. */
      200: never;
      /** @description No menu found */
      404: never;
    };
  };
  /** Get all orders */
  OrdersController_getOrders: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["OrderGetDto"][];
        };
      };
    };
  };
  /** Create order */
  OrdersController_createOrder: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateOrderDto"];
      };
    };
    responses: {
      /** @description Create order */
      201: never;
    };
  };
  /** Change order status to preparing */
  OrdersController_preparing: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Set order status to preparing */
      204: never;
    };
  };
  /** Change order status to ready to serve */
  OrdersController_readyToServe: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Set order status to ready to serve */
      204: never;
    };
  };
  /** Change order status to done */
  OrdersController_done: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Set order status to done */
      204: never;
    };
  };
  /** Cancel order */
  OrdersController_cancel: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Cancel order */
      204: never;
    };
  };
  /** Get all sessions */
  SessionController_getSessions: {
    parameters: {
      query?: {
        finished?: boolean;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SessionSchema"][];
        };
      };
    };
  };
  /** Create a session */
  SessionController_createSession: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSessionDto"];
      };
    };
    responses: {
      /** @description Session created */
      201: {
        content: {
          "application/json": components["schemas"]["SessionSchema"];
        };
      };
      /** @description Session already exists */
      409: never;
    };
  };
  /** Get a session by id */
  SessionController_getSession: {
    parameters: {
      path: {
        /** @description Session ID (ObjectID) */
        id: string;
      };
    };
    responses: {
      /** @description Session */
      200: {
        content: {
          "application/json": components["schemas"]["SessionSchema"];
        };
      };
      /** @description Session not found */
      404: never;
    };
  };
  /** Delete a session by id */
  SessionController_deleteSession: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Session deleted */
      204: never;
      /** @description Session not found */
      404: never;
    };
  };
  /** Get a session by table id */
  SessionController_getSessionByTable: {
    parameters: {
      path: {
        /** @description Table ID */
        id: number;
      };
    };
    responses: {
      /** @description Session */
      200: {
        content: {
          "application/json": components["schemas"]["SessionSchema"];
        };
      };
      /** @description No session found in the table */
      404: never;
    };
  };
  /** Finish a session */
  SessionController_finishSession: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      /** @description Session finished */
      204: never;
      /** @description Session not found */
      404: never;
    };
  };
  /** Get orders by session */
  SessionController_getOrdersBySession: {
    parameters: {
      path: {
        /** @description Session ID (ObjectId) */
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["OrdersListDto"];
        };
      };
    };
  };
  /** Updated session user */
  SessionController_updateSessionUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SessionUserUpdateDto"];
      };
    };
    responses: {
      /** @description Updated session user */
      200: {
        content: {
          "application/json": components["schemas"]["SessionUserUpdateDto"];
        };
      };
    };
  };
  /** Get all useable coupon */
  SessionController_getCoupons: {
    responses: {
      /** @description Get all useable coupon */
      200: {
        content: {
          "application/json": components["schemas"]["ExampleCouponDto"];
        };
      };
    };
  };
  /** Update coupon in session */
  SessionController_updateSessionCoupon: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateSessionCouponDto"];
      };
    };
    responses: {
      /** @description Update coupon in session */
      200: {
        content: {
          "application/json": components["schemas"]["UpdateSessionCouponDto"];
        };
      };
    };
  };
  /** Get all tables */
  TablesController_getTables: {
    responses: {
      /** @description Get tables */
      200: {
        content: {
          "application/json": components["schemas"]["TablesSchema"][];
        };
      };
    };
  };
  /** Create a table */
  TablesController_createTable: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TablesDto"];
      };
    };
    responses: {
      /** @description Create table */
      201: never;
    };
  };
  /** Login */
  AuthController_signIn: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginDto"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["LoginResponseDto"];
        };
      };
    };
  };
  /** Logout */
  AuthController_signOut: {
    responses: {
      204: never;
    };
  };
  /** Customer's registraion */
  AuthController_register: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["RegisterDto"];
        };
      };
    };
  };
  /** Get current user */
  AuthController_getMe: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserResponseDto"];
        };
      };
    };
  };
  /** Get users */
  UsersController_getUsers: {
    parameters: {
      query?: {
        /** @description User role */
        role?: string;
      };
    };
    responses: {
      /** @description Get users by roles */
      200: {
        content: {
          "application/json": components["schemas"]["UserSchema"][];
        };
      };
    };
  };
  /** Create user (for Owner) */
  UsersController_createUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserDto"];
      };
    };
    responses: {
      /** @description Create user */
      201: never;
    };
  };
  /** Delete user */
  UsersController_deleteUser: {
    parameters: {
      query: {
        /** @description User id (ObjectId) */
        id: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** Reset user password */
  UsersController_updateUser: {
    parameters: {
      query: {
        /** @description User id (ObjectId) */
        id: string;
      };
    };
    responses: {
      204: never;
    };
  };
  /** Get all coupons (Owner) */
  CouponsController_findAll: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateCouponDto"][];
        };
      };
    };
  };
  /** Create a coupon */
  CouponsController_create: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateCouponDto"];
      };
    };
    responses: {
      /** @description Coupon created */
      201: {
        content: {
          "application/json": components["schemas"]["CreateCouponDto"];
        };
      };
    };
  };
  /** Get a coupon by id */
  CouponsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CreateCouponDto"];
        };
      };
    };
  };
  /** Delete a coupon by id */
  CouponsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Coupon deleted */
      200: never;
    };
  };
  /** Update a coupon by id */
  CouponsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateCouponDto"];
      };
    };
    responses: {
      /** @description Coupon updated */
      200: {
        content: {
          "application/json": components["schemas"]["CreateCouponDto"];
        };
      };
    };
  };
}
