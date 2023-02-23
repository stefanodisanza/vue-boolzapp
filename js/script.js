var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai? Tutto bene?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_5.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_7.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Va bene, stasera la sento',
                            status: 'recived'
                        },
                        
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_3.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Non ancora',
                            status: 'recived'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_9.jpeg',
                    visible: true,
                    messages: [
                        {
                            date: '0/01/2020 15:30:55',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'recived'
                        },
                        
                    ],
                },
                               
            ],
            currentDate: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            currentContact : 0,
            messageText: "",
            contactText: "",
        },
        methods: {
            setIndexContact: function(position) {
                this.currentContact = position;
                return this.currentContact;
            },
            newMessage: function(contact) {
                let newSentMessage = {
                    date: this.currentDate,
                    text: this.messageText,
                    status: 'sent'
                };

                this.contacts[contact].messages.push(newSentMessage);

                this.messageText = "";

                setTimeout(
                    ()=> {
                        let newReceivedMessage = {
                            date: this.currentDate,
                            text: "Ok",
                            status: 'received'
                        };

                        this.contacts[contact].messages.push(newReceivedMessage);

                    },1000
                );
            },
        },
    }
);