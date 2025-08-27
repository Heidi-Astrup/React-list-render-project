import ListItem from "./ListItem";

export default function ListComponent() {
    const items = [
        {
            id: 1,
            title: "Exciting Product Launch",
            content: "Join us for the launch of our latest product on October 15th."
        },
        {
            id: 2,
            title: "Web Development Workshop",
            content: "Learn the latest web development techniques in our workshop series."
        },
        {
            id: 3,
            title: "New Blog Post",
            content: "Read our new blog post about the future of JavaScript frameworks."
        }
    ];

    return (
        <section>
            {items.map(item => (
                <ListItem title={item.title} content={item.content} key={item.id} />
            ))}
        </section>
    );
}
