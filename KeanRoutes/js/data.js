const locations = {
    building: {
        administration_building: {
            id: "admin_building",
            name: "Administration Building",
            address: "Administration Building, Union, NJ, USA",
            description: "Offers assistance with registration, financial questions + tuition.",
            lat: null,
            lng: null
        },
        admissions_office: {
            id: "admissions_office",
            name: "Admissions Office",
            address: "Office of Admissions, Union, NJ, USA",
            description: "1000 Morris Ave Ste 1, Union, NJ 07083",
            lat: null,
            lng: null
        },
        barlett_hall: {
            id: "barlett_hall",
            name: "Barlett Hall",
            address: "Bartlett Hall, Morris Avenue, Union, NJ, USA",
            description: "Upperclassmen Residence Halls 1000 Morris Avenue",
            lat: null,
            lng: null
        },
        bruce_hall: {
            id: "bruce_hall",
            name: "Bruce Hall",
            address: "Bruce Hall, Morris Avenue, Union, NJ, USA",
            description: "Classrooms + scientific labs biology and medical.",
            lat: null,
            lng: null
        },
        carole_hynes_field_house: {
            id: "carole_hynes",
            name: "Carole Hynes Field House",
            address: "",
            description: "Restrooms + weight room, concessions food",
            lat: null,
            lng: null
        },
        cas: {
            id: "cas",
            name: "Center for Academic Success",
            address: "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA",
            description: "Classrooms mostly for history, english, writing etc.",
            lat: null,
            lng: null
        },
        cougar_hall: {
            id: "cougar_hall",
            name: "Cougar Hall",
            address: "Cougar Hall, Morris Avenue, Union, NJ, USA",
            description: "Residence dorms, cafe, great room lounge, game room, business center.",
            lat: null,
            lng: null
        },
        dangola_gym: {
            id: "dang_gym",
            name: "D'Angola Gymnasium",
            address: "D'Angola Gymnasium, Morris Avenue, Union, NJ, USA",
            description: "Fitness center with machines, free weights, cardio equipment, and pool.",
            lat: null,
            lng: null
        },
        downs_hall: {
            id: "downs_hall",
            name: "Downs Hall",
            address: "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Meeting rooms, health services, counseling services, police HQ.",
            lat: null,
            lng: null
        },
        glab: {
            id: "glab",
            name: "Green Lane Academic Building (GLAB)",
            address: "Green Lane Academic Building [GLAB], Morris Avenue, Union, NJ, USA",
            description: "Classrooms, faculty offices, full-service bookstore/library.",
            lat: 40.6826,
            lng: -74.2361
        },
        harwood_arena: {
            id: "harwood_arena",
            name: "Harwood Arena",
            address: "Harwood Arena, Morris Ave, Union, NJ, USA",
            description: "Administrative offices for sports + three basketball courts.",
            lat: null,
            lng: null
        },
        dghh: {
            id: "dghh",
            name: "Dorothy Grant Hennings Hall",
            address: "Hennings Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Classrooms connected to Hutchinson Hall and George Hennings Hall.",
            lat: null,
            lng: null
        },
        tech_building: {
            id: "tech_building",
            name: "Technology Building",
            address: "",
            description: "Classrooms, faculty offices, Child Care and Development Center.",
            lat: null,
            lng: null
        },
        wilkins_theatre: {
            id: "wilkins_theatre",
            name: "Wilkins Theatre",
            address: "Wilkins Theatre, Morris Avenue, Union, NJ, USA",
            description: "956-seat theatre for performances and events.",
            lat: null,
            lng: null
        },
        nancy_thompson_library: {
            id: "nancy_thompson_library",
            name: "Nancy Thompson Library",
            address: "Nancy Thompson Library, Morris Avenue, Union, NJ, USA",
            description: "Library building with Starbucks.",
            lat: null,
            lng: null
        },
        hutchinson_hall: {
            id: "hutchinson_hall",
            name: "Hutchinson Hall",
            address: "Hutchinson Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Political science, culture sciences, design studios.",
            lat: null,
            lng: null
        },
        hynes_hall: {
            id: "hynes_hall",
            name: "Hynes Hall",
            address: "Hynes Hall, Morris Avenue, Union, NJ, USA",
            description: "Meeting rooms, classrooms, presentation spaces.",
            lat: 40.6828,
            lng: -74.23285
        },
        miron_student_center: {
            id: "miron_student_center",
            name: "Miron Student Center",
            address: "Miron Student Center, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Food court, game room, convenience store.",
            lat: null,
            lng: null
        },
        whiteman_hall: {
            id: "whiteman_hall",
            name: "Whiteman Hall",
            address: "Whiteman Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dormitories + mailroom.",
            lat: null,
            lng: null
        },
        freshman_residence_hall: {
            id: "freshman_residence_hall",
            name: "Freshman Residence Hall",
            address: "Freshman Residence Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dormitories.",
            lat: null,
            lng: null
        },
        upperclassman_residence_hall: {
            id: "upperclassman_residence_hall",
            name: "Upperclassman Residence Hall",
            address: "Upperclass Residence Hall, Kean University, Morris Avenue, Elizabeth, NJ, USA",
            description: "Upperclassmen dorms and Kean Kitchen buffet.",
            lat: null,
            lng: null
        },
        dougall_hall: {
            id: "dougall_hall",
            name: "Dougall Hall",
            address: "Dougall Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Freshmen dorms + Cougar Cardio Room.",
            lat: null,
            lng: null
        },
        burch_hall: {
            id: "burch_hall",
            name: "Burch Hall",
            address: "Burch Hall, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: null,
            lng: null
        },
        rogers_hall: {
            id: "rogers_hall",
            name: "Rogers Hall",
            address: "Rogers Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: null,
            lng: null
        },
        george_hennings_hall: {
            id: "george_hennings_hall",
            name: "George Hennings Hall",
            address: "Hennings Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Classrooms, faculty offices, computer labs.",
            lat: null,
            lng: null
        },
        north_ave_building: {
            id: "north_ave_building",
            name: "North Avenue Academic Building (NAAB)",
            address: "North Avenue Academic Building [NAAB], Morris Avenue, Union, NJ, USA",
            description: "Classrooms, faculty offices, computer labs.",
            lat: null,
            lng: null
        },
        stem_building: {
            id: "stem_building",
            name: "STEM Building",
            address: "Kean University STEM Building, Morris Avenue, Union, NJ, USA",
            description: "STEM courses.",
            lat: null,
            lng: null
        },
        townsend_hall: {
            id: "townsend_hall",
            name: "Townsend Hall",
            address: "Townsend Hall, Kean University 1000, Morris Avenue, Union, NJ, USA",
            description: "Classrooms and lockers.",
            lat: null,
            lng: null
        },
        liberty_hall: {
            id: "liberty_hall",
            name: "Liberty Hall Academic Center",
            address: "Liberty Hall Academic Center, Morris Avenue, Union, NJ, USA",
            description: "Miscellaneous courses such as history.",
            lat: null,
            lng: null
        },
        sozio_hall: {
            id: "sozio_hall",
            name: "Sozio Hall",
            address: "Sozio Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Dormitories.",
            lat: null,
            lng: null
        },
        nathan_weiss: {
            id: "nathan_weiss",
            name: "Nathan Weiss Graduate College",
            address: "Nathan Weiss Graduate College, North Avenue, Kean University, Hillside, NJ, USA",
            description: "Graduate college building connected to Enlow Recital Hall.",
            lat: null,
            lng: null
        }
    },
    parking: {
        bruce_hall_parking: {
            id: "bruce_hall_parking",
            name: "Bruce Hall Parking Lot",
            address: "Bruce Hall, Morris Avenue, Union, NJ, USA",
            description: "Parking closest to the Bruce Hall entrance and George Hennings Hall side entrance. Yellow line spaces are staff-only.",
            lat: null,
            lng: null
        },
        cougar_hall_parking: {
            id: "cougar_hall_parking",
            name: "Cougar Hall Parking Lot",
            address: "Cougar Hall, Morris Avenue, Union, NJ, USA",
            description: "Staff-only parking lot behind Cougar Hall dorm.",
            lat: null,
            lng: null
        },
        dang_gym_parking: {
            id: "dang_gym_parking_lot",
            name: "D'Angola Gym Parking Lot",
            address: "D’Angola Gym, Morris Avenue, Union, NJ, USA",
            description: "Staff parking next to D'Angola Gym. Small additional staff lot across the gym.",
            lat: null,
            lng: null
        },
        glab_parking: {
            id: "glab_parking",
            name: "GLAB Parking Lot",
            address: "GLAB Parking, Union, NJ, USA",
            description: "Parking next to the Green Lane Academic Building for classes or bookstore visits.",
            lat: null,
            lng: null
        },
        harwood_parking: {
            id: "harwood_parking",
            name: "Harwood Arena Parking Lot",
            address: "Harwood Arena, Morris Avenue, Union, NJ, USA",
            description: "Parking lot next to Harwood Arena.",
            lat: null,
            lng: null
        },
        hennings_hall_parking: {
            id: "hennings_hall_parking",
            name: "Hennings Hall Parking Lot",
            address: "Hennings Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Parking in front of George Hennings Hall and Dorothy Grant Hennings Hall. Yellow lines = staff only.",
            lat: null,
            lng: null
        },
        hynes_hall_parking: {
            id: "hynes_hall_parking",
            name: "Hynes Hall Parking Lot",
            address: "",
            description: "Parking around Hynes Hall.",
            lat: null,
            lng: null
        },
        hynes_hall_overflow: {
            id: "hynes_hall_overflow_parking",
            name: "Hynes Hall Overflow Parking Lot",
            address: "",
            description: "Extra parking space near Hynes Hall.",
            lat: null,
            lng: null
        },
        east_campus_parking: {
            id: "e_campus_parking",
            name: "East Campus Parking Lot",
            address: "",
            description: "Parking lot near Nathan Weiss Graduate College on East Campus.",
            lat: null,
            lng: null
        },
        east_campus_overflow: {
            id: "e_campus_overflow_parking",
            name: "East Campus Overflow Parking Lot",
            address: "",
            description: "Extra parking space on East Campus.",
            lat: null,
            lng: null
        },
        east_campus_upper: {
            id: "e_campus_upper_parking",
            name: "East Campus Upper Parking Lot",
            address: "Enlow Recital Hall, North Avenue, Hillside, NJ, USA",
            description: "Staff parking lot near Enlow Recital Hall.",
            lat: null,
            lng: null
        },
        kean_hall_parking: {
            id: "kean_hall_parking",
            name: "Kean Hall Parking Lot",
            address: "Kean Hall Lot, Green Lane, Union, NJ, USA",
            description: "Parking near the Green Lane entrance and across from GLAB.",
            lat: null,
            lng: null
        },
        kean_parking_deck: {
            id: "kean_parking_deck",
            name: "Kean Parking Deck",
            address: "Kean Parking Garage, Union, NJ, USA",
            description: "Parking deck located to the right of Hynes Hall.",
            lat: 40.6823,
            lng: -74.2316
        },
        liberty_hall_parking: {
            id: "lmac_parking",
            name: "Liberty Hall Parking Lot",
            address: "",
            description: "Parking next to Liberty Hall Academic Center.",
            lat: null,
            lng: null
        },
        stem_parking: {
            id: "stem_parking",
            name: "STEM Parking Lot",
            address: "Kean University STEM Building, Morris Avenue, Union, NJ, USA",
            description: "Parking in front of the STEM Building.",
            lat: null,
            lng: null
        },
        vaughn_eames_parking: {
            id: "vaughn_eames_parking",
            name: "Vaughn-Eames Parking Lot",
            address: "Vaughn-Eames Hall, Morris Avenue, Union, NJ, USA",
            description: "Parking near Vaughn-Eames Hall and NAAB. 24-hour parking beyond orange curb.",
            lat: null,
            lng: null
        },
        visitor_parking: {
            id: "visitor_parking",
            name: "Visitor Parking Lot",
            address: "",
            description: "Parking lot for visitors without permits.",
            lat: null,
            lng: null
        },
        wilkins_parking: {
            id: "wilkins_parking",
            name: "Wilkins Theatre Parking Lot",
            address: "Wilkins Theatre, Morris Avenue, Union, NJ, USA",
            description: "Staff parking between Hutchinson Hall and Wilkins Theatre.",
            lat: null,
            lng: null
        }
    },
    food: {
        chipotle: {
            id: "chipotle",
            name: "Chipotle Mexican Grill",
            address: "Chipotle Mexican Grill, Morris Avenue, Union, NJ, USA",
            description: "Chipotle has Mexican food in a build-your-own-meal style: burritos, quesadillas, bowls.",
            lat: null,
            lng: null
        },
        coldstone: {
            id: "coldstone",
            name: "Cold Stone Creamery",
            address: "Cold Stone Creamery, Morris Avenue, Union, NJ, USA",
            description: "Ice cream, milkshakes, smoothies, frappes, cakes, and cookies.",
            lat: null,
            lng: null
        },
        kean_kitchen: {
            id: "kean_kitchen",
            name: "Kean Kitchen",
            address: "",
            description: "Kean's dining hall offering salads, fruits, grilled entrees, pasta, and full meals.",
            lat: null,
            lng: null
        },
        tropicana_diner: {
            id: "tropicana_diner",
            name: "Tropicana Diner and Bakery",
            address: "Tropicana Diner and Bakery, Morris Avenue, Elizabeth, NJ, USA",
            description: "Lunch, brunch, breakfast, dinner.",
            lat: null,
            lng: null
        },
        mark_twain: {
            id: "mark_twain",
            name: "Mark Twain Diner & Restaurant",
            address: "Mark Twain Diner & Restaurant, Morris Avenue, Union, NJ, USA",
            description: "Breakfast, lunch, dinner.",
            lat: null,
            lng: null
        },
        valenca: {
            id: "valenca",
            name: "Valença Restaurant",
            address: "Valenca Restaurant, Monroe Avenue, Elizabeth, NJ, USA",
            description: "Portuguese and Spanish cuisine.",
            lat: null,
            lng: null
        },
        smash_burger: {
            id: "smash_burger",
            name: "Smashburger",
            address: "Smashburger, Morris Avenue, Union, NJ, USA",
            description: "1000 Morris Ave, Union, NJ 07083.",
            lat: null,
            lng: null
        },
        taco_bell: {
            id: "taco_bell",
            name: "Taco Bell",
            address: "Taco Bell, U.S. 22, Hillside, NJ, USA",
            description: "Quesadillas, tacos, burritos, and more.",
            lat: null,
            lng: null
        },
        china_star: {
            id: "china_star",
            name: "China Star",
            address: "China Star, North Avenue, Union, NJ, USA",
            description: "General Tso's chicken, dumplings, spring rolls, crab rangoons, and more.",
            lat: null,
            lng: null
        },
        dairy_queen: {
            id: "dairy_queen",
            name: "Dairy Queen",
            address: "Dairy Queen Grill & Chill, Morris Avenue, Union, NJ, USA",
            description: "Ice cream and fast-food staples.",
            lat: null,
            lng: null
        },
        dunkin: {
            id: "dunkin",
            name: "Dunkin'",
            address: "Dunkin', Morris Avenue, Union, NJ, USA",
            description: "Coffee, breakfast, sandwiches.",
            lat: null,
            lng: null
        },
        soul_factory: {
            id: "soul_factory",
            name: "Soul Food Factory",
            address: "Soul Food Factory, Morris Avenue, Union, NJ, USA",
            description: "Southern-style food.",
            lat: null,
            lng: null
        }
    },
    chargingStations: {
        charging_station_hutchinson: {
            id: "charging_station1",
            name: "Charging Station (Hutchinson Hall)",
            address: "Hutchinson Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Six charging stations located in front of Hutchinson Hall on the Main Campus.",
            lat: null,
            lng: null
        },
        charging_station_east_campus: {
            id: "charging_station2",
            name: "Charging Station (East Campus)",
            address: "Kean University East Campus, North Avenue, Hillside, NJ, USA",
            description: "Six charging stations located in the East Campus parking lot.",
            lat: null,
            lng: null
        }
    },
    convenienceStores: {
        seven_eleven: {
            id: "711",
            name: "7-Eleven",
            address: "7-Eleven, Galloping Hill Road, Union, NJ, USA",
            description: "Pit stop for snacks and drinks.",
            lat: null,
            lng: null
        },
        jabes_mini_market: {
            id: "jabes",
            name: "Jabes Mini Market & Deli",
            address: "Jabes Mini Market & Deli, Magie Avenue, Union, NJ, USA",
            description: "Neighborhood convenience store and deli.",
            lat: null,
            lng: null
        },
        cvs_union: {
            id: "cvs1",
            name: "CVS Pharmacy (Union)",
            address: "CVS, Morris Avenue, Union, NJ, USA",
            description: "Closest pharmacy and retail store for essentials and medicines.",
            lat: null,
            lng: null
        },
        cvs_elizabeth: {
            id: "cvs2",
            name: "CVS Pharmacy (Elizabeth)",
            address: "CVS, Westfield Avenue, Elizabeth, NJ, USA",
            description: "Pharmacy offering daily essentials, prescriptions, and photo services.",
            lat: null,
            lng: null
        },
        quick_shop: {
            id: "quick_shop",
            name: "Quick Shop",
            address: "Quick Shop, North Avenue, Union, NJ, USA",
            description: "Small business convenience store.",
            lat: null,
            lng: null
        },
        walgreens: {
            id: "walgreens",
            name: "Walgreens",
            address: "Walgreens, Newark Avenue, Elizabeth, NJ, USA",
            description: "Pharmacy offering prescriptions, immunizations, photo services, and essentials.",
            lat: null,
            lng: null
        }
    },
    gasStation: {
        delta: {
            id: "delta",
            name: "Delta Gas Station",
            address: "Delta, Magie Avenue, Union, NJ, USA",
            description: "Gas station.",
            lat: null,
            lng: null
        },
        enrite: {
            id: "enrite",
            name: "Enrite Gas Station",
            address: "Enrite, West Grand Street, Elizabeth, NJ, USA",
            description: "Gas station.",
            lat: null,
            lng: null
        },
        exxon: {
            id: "exxon",
            name: "Exxon",
            address: "Exxon, Westfield Avenue, Elizabeth, NJ, USA",
            description: "Gas station + convenience store.",
            lat: null,
            lng: null
        },
        ez_quick: {
            id: "ez_quick",
            name: "EZ Quick",
            address: "EZ QUICK, Morris Avenue, Elizabeth, NJ, USA",
            description: "Gas station.",
            lat: null,
            lng: null
        },
        fuel_4: {
            id: "fuel",
            name: "Fuel 4 Gas & Diesel",
            address: "Fuel 4 Gas & Diesel, Morris Avenue, Union, NJ, USA",
            description: "Gas station.",
            lat: null,
            lng: null
        },
        shell: {
            id: "shell",
            name: "Shell",
            address: "Shell, Newark Avenue, Elizabeth, NJ, USA",
            description: "Gas station + convenience store.",
            lat: null,
            lng: null
        }
    },
    events: {
        basketball1: {
            id: "basketball1",
            name: "MBB vs Albright College",
            address: "",
            description: "Men's Basketball — December 16th, 2025 at 6:00 PM. Union, NJ.",
            lat: null,
            lng: null
        },
        speech_meeting: {
            id: "speech_meeting",
            name: "Speech Club Meeting",
            address: "Kean University East Campus, North Avenue, Hillside, NJ, USA",
            description: "Speech Club Meeting — December 16th, 2025 at 3:30 PM. East Campus 146.",
            lat: null,
            lng: null
        },
        general_body_meeting: {
            id: "body_meeting",
            name: "General Body Meeting",
            address: "Center for Academic Success, Morris Avenue, Kean University, Union, NJ, USA",
            description: "General Body Meeting — December 16th, 2025 at 3:30 PM. CAS 247.",
            lat: null,
            lng: null
        },
        residence_assistance: {
            id: "residence_assistance",
            name: "Resident Assistance Info Session",
            address: "",
            description: "Resident Assistance Information Session — December 16th, 2025 at 5:00 PM. Held online.",
            lat: null,
            lng: null
        },
        get_tested: {
            id: "get_tested",
            name: "Get Yourself Tested",
            address: "Downs Hall, Kean University, Morris Avenue, Union, NJ, USA",
            description: "Get Yourself Tested — December 17th, 2025 at 11:00 AM. Wellness Center - Downs Hall.",
            lat: null,
            lng: null
        },
        funk_meeting: {
            id: "funk",
            name: "FUNK General Body Meeting",
            address: "",
            description: "FUNK General Body Meeting — December 18th, 2025 at 7:30 PM. MSC 228.",
            lat: null,
            lng: null
        },
        legacy_broadway: {
            id: "legacy_broadway",
            name: "Jewish Legacy of Broadway Performance",
            address: "Enlow Recital Hall, North Avenue, Hillside, NJ, USA",
            description: "L'Chaim: A Toast to the Jewish Legacy of Broadway — December 20th, 2025 at 7:30 PM. Enlow Recital Hall.",
            lat: null,
            lng: null
        },
        breakfast_with_santa: {
            id: "breakfast_with_santa",
            name: "Breakfast with Santa",
            address: "Liberty Hall Museum, Morris Avenue, Union, NJ, USA",
            description: "Breakfast with Santa — December 21st, 2025 at 8:30 AM & 11:30 AM. Liberty Hall Museum. Volunteers needed.",
            lat: null,
            lng: null
        },
        basketball2: {
            id: "basketball2",
            name: "MBB vs Ithaca College",
            address: "",
            description: "Men's Basketball Tournament — January 2nd, 2025 at 6:00 PM. Hoboken, NJ.",
            lat: null,
            lng: null
        },
        basketball3: {
            id: "basketball3",
            name: "MBB vs Stevens College",
            address: "",
            description: "Men's Basketball Tournament — January 4th, 2025 at 4:00 PM. Hoboken, NJ.",
            lat: null,
            lng: null
        },
        basketball4: {
            id: "basketball4",
            name: "WBB vs William Paterson College",
            address: "",
            description: "Women's Basketball — January 7th, 2025 at 5:30 PM. Union, NJ.",
            lat: null,
            lng: null
        },
        basketball5: {
            id: "basketball5",
            name: "MBB vs William Paterson College",
            address: "",
            description: "Men's Basketball — January 7th, 2025 at 7:30 PM. Union, NJ.",
            lat: null,
            lng: null
        }
    }
};