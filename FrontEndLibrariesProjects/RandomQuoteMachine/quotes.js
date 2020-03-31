

let quotes = [

    {
        author: 'Stephen King',
        text: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."
    },


    {
        author: 'Anaïs Nin',
        text: "We write to taste life twice, in the moment and in retrospect."
    },

    {
        author: "Mark Twain", text:
            "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be."
    },

    {
        author: "Toni Morrison", text:
            "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
    },

    {
        author: "Jack Kerouac, The Dharma Bums", text:
            "One day I will find the right words, and they will be simple."
    },

    {
        author: "Benjamin Franklin", text:
            "Either write something worth reading or do something worth writing."
    },

    {
        author: "Robert Frost", text:
            "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader."
    },

    {
        author: "William Faulkner", text:
            "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window."
    },

    {
        author: "Ray Bradbury, Zen in the Art of Writing", text:
            "You must stay drunk on writing so reality cannot destroy you."
    },

    {
        author: "Aldous Huxley, Brave New World", text:
            "Words can be like X-rays if you use them properly -- they'll go through anything. You read and you're pierced."
    },

    {
        author: "Henry David Thoreau", text:
            "How vain it is to sit down to write when you have not stood up to live."
    },


    {
        author: "Thomas Mann, Essays of Three Decades", text:
            "A writer is someone for whom writing is more difficult than it is for other people."
    },


    {
        author: "Franz Kafka",
        text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly."
    }

]


document.getElementById("new-quote").addEventListener("click", generate = () => {
    var randIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('text').innerHTML = quotes[randIndex].text;
    document.getElementById('author').innerHTML = '-' + quotes[randIndex].author;

})