class dataBaseConnection {
    private static instance: dataBaseConnection | null = null;

    private constructor() {
        console.log("db connection estb");

    }
    public static getInstance(): dataBaseConnection {
        if (this.instance === null) {
            this.instance = new dataBaseConnection;
        }
        return this.instance
    };
    public query(sql: string): void {
        console.log(`executing query: ${sql}`);

    }

}

const conn1 = dataBaseConnection.getInstance();
const conn2 = dataBaseConnection.getInstance();
console.log(conn1 === conn2); // Check memory allocation (Should be true)
conn1.query("SELECT * FROM users");
