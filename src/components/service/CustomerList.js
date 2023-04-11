export const CustomerList = {
  getData() {
    return [
      {
        id: 1000,
        name: "Arjun",
        country: {
          name: "India",
          code: "in",
        },
        date: "2022-10-12",
        status: "unqualified",
        activity: 17,
        representative: {
          name: "Ganesh",
        },
        balance: 85416,
      },
      {
        id: 1001,
        name: "Meera",
        country: {
          name: "India",
          code: "in",
        },
        date: "2021-02-08",
        status: "proposal",
        activity: 24,
        representative: {
          name: "Aaditya",
        },
        balance: 98654,
      },
      {
        id: 1002,
        name: "Kailash",
        country: {
          name: "India",
          code: "in",
        },
        date: "2020-05-25",
        status: "qualified",
        activity: 63,
        representative: {
          name: "Aaditya",
        },
        balance: 45745,
      },
      {
        id: 1003,
        name: "Mohan",
        country: {
          name: "Australia",
          code: "au",
        },
        date: "2020-09-15",
        status: "new",
        activity: 77,
        representative: {
          name: "Ganesh",
        },
        balance: 88521,
      },
      {
        id: 1004,
        name: "Neeraj",
        country: {
          name: "South Africa",
          code: "za",
        },
        date: "2022-08-20",
        status: "proposal",
        activity: 33,
        representative: {
          name: "Priyanka ",
        },
        balance: 93905,
      },
      {
        id: 1005,
        name: "Lavanya",
        country: {
          name: "Australia",
          code: "au",
        },
        date: "2020-02-20",
        status: "qualified",
        activity: 86,
        representative: {
          name: "Priyanka ",
        },
        balance: 55847,
      },
      {
        id: 1006,
        name: "Shivani",
        country: {
          name: "South Africa",
          code: "za",
        },
        date: "2022-02-15",
        status: "renewal",
        activity: 69,
        representative: {
          name: "Aaditya",
        },
        balance: 69875,
      },
      {
        id: 1007,
        name: "Kathir",
        country: {
          name: "Australia",
          code: "au",
        },
        date: "2020-01-13",
        status: "renewal",
        activity: 90,
        representative: {
          name: "Ganesh",
        },
        balance: 25251,
      },
      {
        id: 1008,
        name: "Zara",
        country: {
          name: "Australia",
          code: "au",
        },
        date: "2021-12-21",
        status: "unqualified",
        activity: 76,
        representative: {
          name: "Ganesh",
        },
        balance: 75869,
      },
      {
        id: 1009,
        name: "Shruthi",
        country: {
          name: "India",
          code: "in",
        },
        date: "2022-07-10",
        status: "proposal",
        activity: 40,
        representative: {
          name: "Aaditya",
        },
        balance: 63451,
      },
    ];
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },
};
