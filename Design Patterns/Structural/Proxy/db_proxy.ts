interface Database {
    query(sql: string): void;
}

class RealDatabase implements Database {
    query(sql: string): void {
        console.log("Executing SQL Query : " + sql);
    }
}

class DatabaseProxy implements Database {
    private database: Database;
    private userRole: string

    constructor(database: Database, userRole: string) {
        this.database = database;
        this.userRole = userRole
    }


    query(sql: string): void {
        if (this.userRole === "admin") {
            this.database.query(sql)
        }
        else {
            console.error("Access Denied: You do not have permission!");
        }
    }
}

const realDB = new RealDatabase();

// Admin user — should succeed 
const adminProxy = new DatabaseProxy(realDB, "admin");
adminProxy.query("SELECT * FROM users");

// Normal user — should be blocked
const userProxy = new DatabaseProxy(realDB, "viewer");
userProxy.query("DROP TABLE users");

