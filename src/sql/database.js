// Create connnection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'news_portal'
});

// Connect to MySQL
db.connect(err => {
    if(err) {
        throw err;
    }
    console.log("MySQL Connected");
});

//const app = express();

//Create DataBase
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE news_portal";
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send("DataBase Created");
    });
});

// Create Table
app.get("/createnews", (req, res) => {
    let sql = "CREATE TABLE news("
        + "id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT"
        + ", title VARCHAR(100)"
        + ", news TEXT"
        + ", data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
    ")";
    db.query(sql, err => {
        if(err) {
            throw err;
        }
        res.send('News table created');
    });

});

// Insert new
app.get('/new1', (req, res) => {
    let post = {title: 'my title', news: 'content of the news'};
    let sql = 'INSERT INTO news SET ?';
    let query = db.query(sql, post, err => {
        if(err) {
            throw err;
        }
        res.send('New added');
    });
});

// Select news
app.get('/getnew', (req, res) => {
    let sql = 'SELECT  * FROM news';
    let quert = db.query(sql, (err, results) => {
        if(err) {
            throw err;
        }
        console.log(results);
        res.send('New detail fetched');
    });
});