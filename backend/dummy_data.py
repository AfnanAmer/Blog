import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('blog.db')
cursor = conn.cursor()

# Dummy data to insert
dummy_data = [
    {
        "title": "First Post",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "image_url": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "category": "technology"
    },
    {
        "title": "Second Post", 
        "body": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image_url": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        "category": "lifestyle"
    },
    {
        "title": "Third Post",
        "body": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        "image_url": "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
        "category": "technology"
    },
    {
        "title": "Fourth Post",
        "body": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        "image_url": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        "category": "lifestyle"
    },
    {
        "title": "Fifth Post",
        "body": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "category": "technology"
    },
    {
        "title": "Sixth Post",
        "body": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        "category": "lifestyle"
    },
    {
        "title": "Seventh Post",
        "body": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        "image_url": "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
        "category": "technology"
    },
    {
        "title": "Eighth Post", 
        "body": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        "image_url": "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
        "category": "lifestyle"
    },
    {
        "title": "Ninth Post",
        "body": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "category": "technology"
    },
    {
        "title": "Tenth Post",
        "body": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        "image_url": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        "category": "lifestyle"
    }
]

# Convert dummy_data to a list of tuples
dummy_data_tuples = [(d["title"], d["body"], d["image_url"], d["category"]) for d in dummy_data]

# Insert dummy data
cursor.executemany('''
INSERT INTO blogs (title, body, image_url, category) VALUES (?, ?, ?, ?)
''', dummy_data_tuples)

# Commit the changes and close the connection
conn.commit()
conn.close()