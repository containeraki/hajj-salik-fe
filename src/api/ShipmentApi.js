import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const shipments = [
    {
        "id": 1,
        "title": "Quo placeat laborum eaque et repudiandae.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "883 Koepp Cove Suite 102\nSouth Myronhaven, IL 25489-1719",
        "shipment_to": "22535 Quitzon Trail\nWillishaven, IN 19836",
        "partner": "Ut pariatur omnis omnis velit aliquam similique et veritatis. Magni assumenda sunt quas minus ut. Corporis est et distinctio."
    },
    {
        "id": 2,
        "title": "Ab velit architecto omnis sint a.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "8895 Eulah Prairie\nEast Malachifurt, ME 92176",
        "shipment_to": "91852 Maryam Prairie Suite 537\nTonystad, MS 25819",
        "partner": "Veritatis id cupiditate unde culpa nulla nulla animi. Nostrum consequatur sunt omnis blanditiis quidem. Et aperiam ut error adipisci cum animi. Qui odit provident eligendi."
    },
    {
        "id": 3,
        "title": "Voluptatem illo possimus voluptas.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "9322 Leanne Unions Apt. 088\nWest Remington, MD 02838-5110",
        "shipment_to": "5266 Reagan Cliff Suite 521\nZacheryville, MI 79626",
        "partner": "Non et sapiente a sed sed totam. Quas eius ducimus voluptas facere ratione. Itaque magni consectetur ut autem dolorem."
    },
    {
        "id": 4,
        "title": "Deleniti est consequatur quos rerum iure ullam iure.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "48427 Wisozk Route\nLake Sethfort, NV 85470-0723",
        "shipment_to": "768 Titus Mountains Apt. 188\nMurazikville, ME 71097-3979",
        "partner": "Sit fuga vel aut magnam sit aperiam itaque. Harum exercitationem rerum et tempora. Quos molestiae quia cumque consectetur."
    },
    {
        "id": 5,
        "title": "Aspernatur repudiandae earum reiciendis et.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "713 Kuhlman Gardens\nPort Irmamouth, VA 19319",
        "shipment_to": "328 Jerrell Plaza Apt. 839\nRaynorberg, ND 72982",
        "partner": "Laboriosam debitis sint maiores aspernatur ipsa enim rem. Qui officia cum odit sit quasi nesciunt. Ut sapiente culpa sapiente dolor ut in nam. Quae facere distinctio eum ipsam voluptas."
    },
    {
        "id": 6,
        "title": "Molestiae qui est quidem excepturi odio quasi occaecati.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "43569 Abshire Islands Apt. 136\nCasperstad, WV 45475",
        "shipment_to": "46594 Abelardo Motorway Suite 965\nSouth Lauren, HI 18090-6748",
        "partner": "Animi voluptatem et eaque incidunt non. Praesentium tenetur at temporibus autem nobis. Facilis corrupti laborum provident totam et ipsum."
    },
    {
        "id": 7,
        "title": "Laboriosam ut vel est.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "89485 Rosalinda Centers\nNadershire, WY 41597-1119",
        "shipment_to": "6658 Alba Circles Suite 406\nKatherinemouth, IN 18111",
        "partner": "Quaerat excepturi aperiam labore nisi est nemo mollitia. Sunt voluptatibus nobis placeat quos quod rerum quibusdam. Culpa rerum sit nam dolor eos qui possimus."
    },
    {
        "id": 8,
        "title": "Distinctio vel quas non molestias sint ipsam nesciunt.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "1637 Tavares Route\nMckaylabury, NE 92936-1416",
        "shipment_to": "50372 Cordia Shore\nSchadenchester, AL 24982-2879",
        "partner": "In sint iusto ipsam dolorem dignissimos expedita. Reiciendis saepe minima maiores error illum facilis velit libero. Nobis officia beatae voluptates voluptas ut dignissimos."
    },
    {
        "id": 9,
        "title": "Maxime et adipisci qui dignissimos.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "449 Skiles Canyon\nTowneside, KS 86104-5193",
        "shipment_to": "2857 Yundt Cape Suite 036\nMafaldaside, OH 93234",
        "partner": "Commodi esse quam delectus nostrum fuga dolore. Vitae id assumenda sit sit ea nobis. Dolorum in totam deleniti."
    },
    {
        "id": 10,
        "title": "Cumque qui sunt dolor consequatur.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "22965 Dicki Islands\nPort Sofia, IA 72598-7151",
        "shipment_to": "2341 Koelpin Manors Suite 779\nLeuschkeport, RI 70745-5901",
        "partner": "Culpa maiores voluptatem et nihil totam qui. Veniam iure sapiente non qui iste adipisci. Deleniti veritatis necessitatibus facere. Quo fuga nam illo."
    },
    {
        "id": 11,
        "title": "Mollitia optio vel mollitia veniam quia.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "930 Laron Plains\nBartolettichester, MI 28182",
        "shipment_to": "53830 Pattie Lane Apt. 379\nNew Alexys, MI 54998",
        "partner": "Et perspiciatis voluptas ut quas blanditiis. Esse itaque aperiam incidunt. Est adipisci molestiae et tempora atque nulla. Perspiciatis est facilis ab repellendus."
    },
    {
        "id": 12,
        "title": "Magni ipsam libero voluptate.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "36967 Camren Causeway\nWintheiserchester, AK 79982-0265",
        "shipment_to": "569 Kilback Passage Suite 237\nKutchborough, PA 81873",
        "partner": "Ullam aut molestiae in soluta provident. Sed libero dignissimos officia beatae. Earum aperiam officiis ut omnis officiis earum sit est."
    },
    {
        "id": 13,
        "title": "Aut quis minima et commodi.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "9838 Rolando Roads Suite 680\nOvahaven, WY 74641-1936",
        "shipment_to": "1131 Anabelle Brooks Apt. 321\nLake Immanuelfurt, MN 80050-2365",
        "partner": "Quis officiis non est saepe sed autem sint. Placeat nemo rerum eius dolorem qui. Explicabo maxime sunt voluptas perspiciatis quod neque. Porro odit sapiente voluptatem doloribus eligendi error est."
    },
    {
        "id": 14,
        "title": "Perferendis iste modi quos tempore magni cupiditate.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "4025 Miller Grove Apt. 509\nSkylaside, DC 28830-7391",
        "shipment_to": "9053 Turcotte Radial\nKossshire, WI 39359-3665",
        "partner": "Et ut sit facilis consectetur molestiae aut. Nobis quia sed ratione dolore et impedit dicta. Pariatur qui non reprehenderit dolorem cum."
    },
    {
        "id": 15,
        "title": "Dignissimos eveniet harum sit.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "871 Willms Ports Suite 422\nStehrbury, NM 95265",
        "shipment_to": "15195 Hickle Orchard Suite 087\nKemmermouth, CA 45973-2512",
        "partner": "Reiciendis sit ad est dolor eligendi. Aspernatur laborum autem quasi rem. Amet atque aut eos et earum ipsa quas. Tempore minus esse qui nisi dolorem omnis nulla."
    },
    {
        "id": 16,
        "title": "Voluptatem eum aperiam a sit eaque veniam sit.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "3291 Kiehn Forge Apt. 851\nPort Mark, AL 30389-7769",
        "shipment_to": "2685 Maurine Lodge Apt. 569\nNorth Nobleshire, MI 96346",
        "partner": "Quidem vel aut vero tempora et ut. Est est et enim aperiam est. Aliquid earum provident adipisci expedita debitis beatae."
    },
    {
        "id": 17,
        "title": "Odio quaerat eaque consequatur pariatur.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "808 Austin River\nLake Bertrand, UT 26605-3237",
        "shipment_to": "4372 Buckridge Tunnel\nSouth Deloresside, MT 98147",
        "partner": "Molestiae molestias non voluptatem laborum mollitia. Sapiente sapiente quisquam dignissimos ipsam. Mollitia maxime sed non."
    },
    {
        "id": 18,
        "title": "Ut quis qui et dolore pariatur aliquid.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "30894 Gutmann Circles\nEast Colbyport, DE 28352-9715",
        "shipment_to": "304 Crist Unions Apt. 915\nPinkiehaven, NC 34746-4549",
        "partner": "Est molestias porro ex voluptatem provident aut ea. Eaque veritatis possimus sit expedita. Quibusdam rerum nostrum quasi molestiae ab deserunt voluptates culpa."
    },
    {
        "id": 19,
        "title": "Veniam nobis dolor aut asperiores dolorem labore rerum.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "8670 Ritchie Orchard Apt. 684\nWest Delaney, WI 98494-4043",
        "shipment_to": "846 Lakin Mall Suite 124\nNicoton, WV 58383",
        "partner": "Aut quia ut nesciunt quia. Ea dicta aliquam dignissimos. Id error voluptatem officia rerum at ex voluptatem."
    },
    {
        "id": 20,
        "title": "Laudantium quo qui a rerum.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "594 Reinger Points Apt. 905\nJazmynetown, OH 01757-3149",
        "shipment_to": "598 Wyman Heights Apt. 361\nDenesikview, AR 19262-6127",
        "partner": "Necessitatibus amet mollitia velit accusamus. Autem distinctio sed eligendi in. Velit officia dolorem nisi in. Atque sed quas atque expedita nihil labore qui."
    },
    {
        "id": 21,
        "title": "Dolore explicabo suscipit et repellendus quo cupiditate.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "58271 Destiney Keys Apt. 852\nMaggieborough, MA 27909",
        "shipment_to": "35177 Ledner Stream Suite 510\nTownefurt, NY 00084-8786",
        "partner": "Ipsa sunt perferendis aspernatur ipsum autem adipisci natus. Aspernatur iste inventore error quos totam nulla sed. Nemo recusandae perferendis voluptates dolorem laudantium."
    },
    {
        "id": 22,
        "title": "Aut ex quam debitis ut quod eos.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "990 Liam Harbor\nGrahamborough, NM 77930",
        "shipment_to": "63512 Kirlin Ferry\nSawaynburgh, VT 51390",
        "partner": "Et corrupti et ipsam sequi quaerat eaque. Est tempora officiis quis. Accusantium beatae nisi impedit eum."
    },
    {
        "id": 23,
        "title": "Deserunt sit reiciendis aut dolorem minus.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "1113 Farrell Prairie Apt. 004\nVandervortland, TN 59675",
        "shipment_to": "585 Dave Alley\nHesselfurt, NJ 34957-7599",
        "partner": "Ut quia quam veritatis ipsam adipisci recusandae ut culpa. Est aut voluptatem soluta saepe voluptas numquam. Necessitatibus aut necessitatibus omnis unde aut sed."
    },
    {
        "id": 24,
        "title": "Nostrum dicta sapiente dolorum quibusdam placeat vitae vero.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "26660 Johnathon Skyway\nSouth Deborah, TN 11002-7334",
        "shipment_to": "45142 Sanford Trail\nPort Annamae, MI 29002-3130",
        "partner": "Expedita dolorum et beatae et est. Quisquam quidem qui voluptas ipsa delectus soluta. Nisi facere voluptatibus est libero ea consequatur."
    },
    {
        "id": 25,
        "title": "Possimus consequatur omnis enim.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "54664 Wolff Squares\nSouth Brendachester, NC 45663-5752",
        "shipment_to": "691 Kessler Oval Apt. 371\nSouth Fermin, NE 20965",
        "partner": "Aperiam fuga consequatur earum sequi. Ullam incidunt laborum odio sed sit ipsum temporibus. Assumenda omnis impedit error veritatis quia."
    },
    {
        "id": 26,
        "title": "Qui quam dolores reprehenderit quasi sed rem.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "63366 Jensen Place\nWisozkstad, WI 33677-0194",
        "shipment_to": "51003 Rosamond Trafficway Suite 267\nEast Kamille, GA 67633-2568",
        "partner": "Animi rem facilis cumque ex eos et esse. Facere dolores nisi tenetur dolores facilis et cupiditate. Quis aut dignissimos est voluptas maxime consequatur enim. Labore commodi omnis fugiat earum."
    },
    {
        "id": 27,
        "title": "Dolor recusandae veniam dicta rerum.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "3692 Pfannerstill View\nEast Sheilahaven, OR 83658",
        "shipment_to": "48262 Mortimer Brook\nNew Joshuahport, WV 06611",
        "partner": "Modi doloribus quo animi debitis sapiente. Deserunt repudiandae et deserunt qui. Iusto totam vitae error quod."
    },
    {
        "id": 28,
        "title": "Quis et placeat voluptatum et ipsam quaerat accusantium.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "8787 Emory Tunnel Apt. 331\nGabriellefurt, WA 66397-9575",
        "shipment_to": "909 Erna Circles\nPort Darian, FL 92795",
        "partner": "Aliquam corporis et sit. Quae delectus inventore voluptas ea voluptatem voluptatem est. Eaque ea recusandae amet porro et placeat sed. Et in aut ut eius."
    },
    {
        "id": 29,
        "title": "Quis quisquam fugit officia accusantium et neque.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "4465 Reilly Shoal Suite 474\nWest Dorothy, AZ 03054-2055",
        "shipment_to": "8526 Wunsch Stream Apt. 986\nMorarfurt, WY 19983-5626",
        "partner": "Repellendus beatae libero odio est molestiae. Corrupti inventore quia dolorem sed dolore ad. Quia voluptates ratione nihil doloremque."
    },
    {
        "id": 30,
        "title": "Et aperiam eligendi alias nobis.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "6242 Jimmie Trail Apt. 197\nStehrfort, IL 26903",
        "shipment_to": "978 Samantha Mount Apt. 256\nClayborough, AL 16230",
        "partner": "Sint est autem vitae ut. Occaecati sit explicabo at aut saepe consequatur et recusandae. Est et dolores modi error ad."
    },
    {
        "id": 31,
        "title": "Quis assumenda qui reiciendis porro.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "59759 Madilyn Lake Apt. 700\nNorth Melbaland, CA 75866-5938",
        "shipment_to": "1719 Nikki Ridges Suite 390\nBettiechester, NC 63562-4074",
        "partner": "Voluptas omnis voluptatibus et ratione magni. Veritatis aut nihil molestias eius. Amet molestiae voluptatem dolores debitis voluptates odit."
    },
    {
        "id": 32,
        "title": "Laboriosam quos velit natus voluptas repellendus amet.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "9138 Koepp Flats\nShanieshire, VA 24762-0853",
        "shipment_to": "4964 Mills Haven\nNew Lillian, WI 29514",
        "partner": "Aut est quae accusamus aut. Et nostrum voluptatem quia rem mollitia. Ut qui aspernatur aut qui. Voluptas quidem ut est dicta."
    },
    {
        "id": 33,
        "title": "Repellendus et soluta explicabo consectetur quo qui et.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "41469 Craig Hills\nRobbville, AL 64973",
        "shipment_to": "8281 Gottlieb Pines Apt. 461\nNew Ottoville, IL 19017",
        "partner": "Qui autem ut minus autem distinctio ratione inventore. Rerum voluptatem odio ipsa sed voluptas qui quibusdam. Odit at ea ut minus cupiditate."
    },
    {
        "id": 34,
        "title": "Numquam labore nihil reprehenderit in molestiae libero.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "862 Orn Point\nSouth Sid, NH 92068",
        "shipment_to": "66933 Barrows Forest\nDallasport, OK 02627",
        "partner": "Est nihil necessitatibus nobis expedita molestiae sequi. A veniam nulla modi voluptas qui sed. Cum officia mollitia sit. Amet aut quae corrupti aspernatur delectus et aut."
    },
    {
        "id": 35,
        "title": "Ut ab id eum non libero aut id nam.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "324 Boyle Meadows Apt. 444\nAstridberg, FL 69944-7517",
        "shipment_to": "87476 Okuneva Mountain\nEinochester, NE 37553-4181",
        "partner": "Commodi facere ea autem perferendis sequi reprehenderit. Officia vero earum accusantium et itaque ut. Praesentium sint consequatur voluptas omnis est."
    },
    {
        "id": 36,
        "title": "Et totam voluptate rerum labore.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "8037 Tamara Mountains\nWest Carmellaville, MD 74892-0674",
        "shipment_to": "126 Beier Coves Apt. 310\nEmiliaport, AL 75667-9691",
        "partner": "Quia totam nemo error porro. Fuga commodi enim ut sed. Quidem cum ut voluptatem distinctio excepturi."
    },
    {
        "id": 37,
        "title": "Rem eveniet eaque cum et eum qui.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "216 Gusikowski Heights Apt. 933\nEast Vince, NC 09599-5189",
        "shipment_to": "53418 Wilkinson Court Apt. 501\nHesselville, TX 71505-6192",
        "partner": "Neque nesciunt animi et est deserunt qui. Sit molestias distinctio consequatur ut odio laboriosam. Quaerat libero suscipit est. Officia perferendis sunt ratione sequi culpa."
    },
    {
        "id": 38,
        "title": "Nemo et expedita veniam a quae.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "76224 Heller Gardens Suite 598\nNew Bernita, MS 53713-2239",
        "shipment_to": "3425 Purdy Trail Apt. 017\nEast Keeganmouth, MN 63290-7609",
        "partner": "Sunt autem iste corrupti corporis. Non adipisci qui sapiente. Libero voluptas et molestiae ea hic."
    },
    {
        "id": 39,
        "title": "Rerum voluptatem in laboriosam enim iure.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "5869 Maegan Station\nHodkiewiczview, ME 75539",
        "shipment_to": "4917 Brown Shore\nNew Rettaview, NY 46666",
        "partner": "Molestias labore laudantium vero eos officiis sit. Et maiores consequatur enim aut esse sed rem velit. Magnam voluptatum cupiditate eum est magnam sunt ut. Ut ut quia velit aspernatur velit."
    },
    {
        "id": 40,
        "title": "Quia voluptatem delectus qui dolores qui deleniti et et.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "7257 Virginia Common Suite 471\nWest Jordi, MN 94920-1790",
        "shipment_to": "6815 Stoltenberg Loaf\nMariannaville, PA 57223-3810",
        "partner": "Optio fuga nihil qui officiis error voluptatem earum. Consequatur qui enim reiciendis aut qui iure. Repellat nihil amet ea tempora."
    },
    {
        "id": 41,
        "title": "Dignissimos corporis perspiciatis voluptatem vel dolore quasi sed.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "23451 Olson Mill\nMarvinfurt, IA 98917",
        "shipment_to": "341 Gleichner Inlet\nEast Tressie, DE 86833",
        "partner": "Expedita rem aliquam voluptatem quam aspernatur. Enim aliquid laborum sapiente in in deleniti nihil. Ad fugiat modi dignissimos omnis optio aut unde eveniet."
    },
    {
        "id": 42,
        "title": "Dolore dolor qui dolor officia magnam sit.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "15343 Kiehn Flats Suite 879\nFisherton, CT 00848",
        "shipment_to": "14114 Gislason Expressway Apt. 171\nHowemouth, NJ 11783",
        "partner": "Repudiandae vero autem blanditiis voluptatum. Ipsa eligendi nihil eius distinctio. Harum hic eos nobis animi nulla provident. Vero sint consectetur nulla dolor incidunt."
    },
    {
        "id": 43,
        "title": "Voluptatem dolor est distinctio veritatis corporis eveniet optio doloribus.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "708 Kuhn Neck\nHenriville, IN 74356-6720",
        "shipment_to": "2429 Everette Islands\nNorth Jonathon, VT 35715",
        "partner": "Et impedit dolorem sint soluta est nobis. Provident qui vitae vel ea reiciendis placeat. Molestiae ex dolorem ut quaerat et."
    },
    {
        "id": 44,
        "title": "Rerum quibusdam assumenda natus ea qui explicabo.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "8790 Leola Lodge\nPort Stanley, KY 66922",
        "shipment_to": "158 Paucek Cliffs Suite 833\nBertrandmouth, WA 63526",
        "partner": "Autem vitae sapiente ut quia vero. Magni minima sed accusantium."
    },
    {
        "id": 45,
        "title": "Quos rerum explicabo est ab exercitationem qui.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "57108 Jalyn Court\nSharonburgh, CA 29363-8002",
        "shipment_to": "1560 Bauch Causeway Apt. 393\nFarrellborough, AR 96764",
        "partner": "Qui et atque autem tempore ipsam mollitia voluptates placeat. Natus atque laborum reiciendis quas hic sapiente iste. Ad totam quod sed aut."
    },
    {
        "id": 46,
        "title": "Quo quisquam alias debitis.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "6972 Clifton Port\nNew Allenside, MN 60594",
        "shipment_to": "7389 Wunsch Island\nWillport, NC 66053",
        "partner": "Vel ut nobis reiciendis rerum illo repudiandae. Rem est error commodi corporis ex. Ullam sit unde quisquam saepe minima nisi. Et neque nisi nisi rerum et."
    },
    {
        "id": 47,
        "title": "Vel ut atque reprehenderit et at assumenda.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "342 Stoltenberg Summit\nPort Seamus, OH 90998",
        "shipment_to": "87830 Carole Bypass Apt. 852\nSelmerbury, MO 00296-7372",
        "partner": "Molestiae omnis vero sed similique porro facilis. Quasi maxime harum atque aut at repellendus pariatur optio. Dolor quod ut et odit laudantium corporis. Incidunt ex eos quia aut in ut autem."
    },
    {
        "id": 48,
        "title": "Est distinctio et ducimus nihil ut rerum quasi.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "309 Lambert Streets Apt. 778\nSchuppemouth, DC 79974-0568",
        "shipment_to": "8746 Ziemann Way\nLake Arlo, UT 81410-4886",
        "partner": "Rerum ex possimus voluptatem aut culpa. In eaque neque nemo est unde. Et enim doloribus a deleniti dolor. Eum saepe illum numquam et qui. Eveniet facilis perferendis facere dolores."
    },
    {
        "id": 49,
        "title": "Quia eos numquam nobis amet qui quis nobis.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "2204 Ezekiel Trail Suite 524\nPort Toney, CO 77570-6741",
        "shipment_to": "85939 Moses Glen\nLake Norris, UT 71498-3889",
        "partner": "Ab quisquam aliquam sequi cum ut. Cum ea doloremque doloribus sint iure dignissimos. Est sunt unde sunt et."
    },
    {
        "id": 50,
        "title": "Eaque perferendis sit et ut id et amet.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:40",
        "updated_at": "2018-08-02 21:21:40",
        "shipment_from": "1011 Garett Branch\nMicaelashire, MO 30270",
        "shipment_to": "9089 Guillermo Mills Apt. 915\nEast Justyn, DC 07871",
        "partner": "Id ut autem dignissimos. Et molestiae rerum iusto. Dignissimos ullam sit nostrum est. Eum quam cupiditate quia facere in. Minus officia tempora asperiores aut molestiae est."
    },
    {
        "id": 51,
        "title": "Nemo officia qui exercitationem inventore voluptatum eum officia.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "44636 Adrianna Meadow\nNienowhaven, WI 28665",
        "shipment_to": "7572 Andy Shoals Apt. 352\nBauchhaven, LA 84506",
        "partner": "Et molestiae in dolorem est id incidunt quia. Et eveniet id est quo. In eos est et itaque. Possimus ut architecto dolor adipisci."
    },
    {
        "id": 52,
        "title": "Blanditiis temporibus aliquid amet aliquam laborum.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "36923 Aiden Island Apt. 417\nHartmannborough, WV 32580-2345",
        "shipment_to": "2222 Emilio Branch\nWest Armandostad, TX 60323",
        "partner": "Possimus ea tempora rerum et amet laboriosam iusto veritatis. Tenetur et eligendi qui nostrum voluptatum modi nisi. Sequi doloribus aspernatur est sit nulla architecto dolor."
    },
    {
        "id": 53,
        "title": "Aut eos pariatur quos vitae aut odio.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "66769 Glenna Court Suite 637\nWisokyside, MO 16242-1888",
        "shipment_to": "77116 Ritchie Ridge\nSouth Dorischester, HI 27820-5491",
        "partner": "Neque accusantium nam quisquam voluptatum quo. Et aut esse vero non. Animi laboriosam eius ea illum perspiciatis."
    },
    {
        "id": 54,
        "title": "Et facilis quia maiores omnis.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "89994 Dell Rapids\nWest Isaiasville, SD 84980-9658",
        "shipment_to": "9399 Kimberly Loaf Apt. 895\nSouth Milo, MA 22903",
        "partner": "Odio cupiditate tempore illo odit aspernatur. Sint quam sed sit. Dolore et ducimus sit eos nihil illum saepe. Ipsa commodi eum sit officia et ullam in laudantium."
    },
    {
        "id": 55,
        "title": "Omnis consectetur assumenda maxime reiciendis molestiae.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "783 VonRueden Ridge\nSouth Eve, KY 76113-0591",
        "shipment_to": "6962 Quinten Isle Apt. 924\nSouth Hadleyhaven, UT 63199",
        "partner": "Eligendi tempore reiciendis enim voluptatem sed. Ex omnis sit voluptatem quam dolores laborum. At est facilis est dolor consequatur aut. Quaerat et provident quasi sed consequatur cumque voluptas."
    },
    {
        "id": 56,
        "title": "Architecto nam dolores dolorum dolore quae.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "751 Graham Roads Apt. 899\nEast Julia, VA 29705",
        "shipment_to": "60334 Holly Gardens Suite 248\nAidenstad, KY 21935-3172",
        "partner": "Totam perferendis omnis eius odio accusantium iure. Optio ipsa et id doloremque numquam eaque ab. Est adipisci voluptatem debitis dolores nihil cumque facere aut. Quaerat maxime ut nobis porro enim."
    },
    {
        "id": 57,
        "title": "Consequuntur fugit dolor nihil ut qui eius.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "5934 Armstrong Extension Suite 123\nSouth Claudineland, NE 34723-7846",
        "shipment_to": "17659 Block Branch Suite 914\nEast Celineton, VT 03873-2583",
        "partner": "Eos iste architecto possimus. Ratione et eos iste saepe. Numquam eveniet cum sed et. Et sunt reiciendis ea voluptas occaecati dolorem nihil."
    },
    {
        "id": 58,
        "title": "Cum vitae ut aut voluptatibus.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "1583 Thompson Ways\nChamplinside, IL 43669",
        "shipment_to": "7037 O'Conner Locks\nPort Ellis, OK 11026",
        "partner": "Animi impedit deleniti facere. Porro et in nesciunt. Enim ut cupiditate cum quisquam."
    },
    {
        "id": 59,
        "title": "Nostrum sit libero vel error et enim.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "342 Hermiston Rue\nKylaview, MT 62561-1604",
        "shipment_to": "140 Johathan Greens Suite 661\nEast Ethachester, GA 87467",
        "partner": "Debitis unde quos voluptatem accusantium quasi saepe. Similique aliquid enim deleniti doloribus. Et tempore dolor iste sit."
    },
    {
        "id": 60,
        "title": "Libero corporis repudiandae quod error.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "6838 Jakubowski Underpass\nMarquesland, AR 42043",
        "shipment_to": "651 Braden Meadow\nWest Gisselleland, AZ 66080-1618",
        "partner": "Unde eveniet ut animi consectetur laudantium. Temporibus sapiente voluptatibus nostrum."
    },
    {
        "id": 61,
        "title": "Deleniti rem alias qui occaecati.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "8176 Schowalter Courts Suite 711\nSouth Cierra, IA 07076-5924",
        "shipment_to": "83662 Nathanael Run\nLake Jayda, PA 16052-2544",
        "partner": "Voluptas qui eligendi quo qui laudantium quo. In dolor distinctio commodi ducimus delectus sequi. Deleniti similique velit et qui velit quod."
    },
    {
        "id": 62,
        "title": "Cupiditate eos explicabo est nulla adipisci.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "32750 McClure Trace\nLake Julius, HI 49477-5061",
        "shipment_to": "157 Lind Alley\nNew Dillanmouth, NJ 79124-8094",
        "partner": "Ipsa molestias repudiandae eos sit. Sint velit ex odio facilis et. Est omnis facilis laboriosam aliquam dignissimos. Expedita tempora aut rem quod aut."
    },
    {
        "id": 63,
        "title": "Ut placeat in qui.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "46724 Kovacek River\nNew Ali, MT 73320-2420",
        "shipment_to": "7128 Larkin Junction Suite 591\nPort Syble, PA 27159",
        "partner": "Natus aliquam et est deserunt magnam. Deleniti qui dolor omnis voluptatem architecto itaque. Sequi eius et soluta consequuntur esse. Molestiae molestias sint sunt mollitia nostrum a soluta."
    },
    {
        "id": 64,
        "title": "Reiciendis alias ex ut nam et ea.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "82940 Gerlach Hills Suite 255\nLake Blaze, AK 26502-6890",
        "shipment_to": "3473 Kayleigh View\nLake Laneyburgh, ME 22214-5072",
        "partner": "Id unde aperiam quo corrupti optio labore sint. Facere tempore modi labore voluptate vel sint."
    },
    {
        "id": 65,
        "title": "Libero porro explicabo neque.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "3082 Hessel Turnpike\nFeiltown, IA 25863",
        "shipment_to": "5291 Wiza Court\nEast Ashlyberg, CA 01345",
        "partner": "Iusto ut ad similique ipsam. Ad nihil in commodi rem fugit earum id. Natus deleniti aliquid suscipit aperiam consequatur illo id nisi."
    },
    {
        "id": 66,
        "title": "Excepturi et doloremque dolores dolorum at.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "2985 Mosciski Estate Apt. 474\nHillsfort, WI 87668",
        "shipment_to": "344 Osborne Lodge Suite 502\nDareton, MI 12971",
        "partner": "Error fugiat aut eius harum necessitatibus aut quia. Repellendus voluptas magni voluptatem at. Non non velit sunt. Quo enim quos magni explicabo ut quis perspiciatis mollitia."
    },
    {
        "id": 67,
        "title": "Voluptatum amet vel repellendus.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "62234 Spinka Via Suite 292\nLake Leonard, CA 80701-4027",
        "shipment_to": "94943 Jodie Points Suite 738\nLolitamouth, MS 03543-9140",
        "partner": "In aut voluptas tempore voluptatem praesentium. Fugit corrupti repellendus recusandae eius et. Illum voluptas sit numquam omnis sed repudiandae est. Et ut unde ab libero cumque soluta magnam."
    },
    {
        "id": 68,
        "title": "Officia rerum et dolores non dolores facere.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "36519 Kraig Stream\nWest Anika, OR 22418",
        "shipment_to": "298 Bradtke Overpass Suite 825\nAubreeville, WI 96630",
        "partner": "Atque dicta inventore laboriosam ipsam officia voluptatem qui. Magni nihil facilis sint amet quo tempore similique. Consequatur rerum aut est qui mollitia."
    },
    {
        "id": 69,
        "title": "Qui ut voluptate repellat.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "986 Caroline Highway Apt. 160\nPort Raleigh, VA 24073-8059",
        "shipment_to": "5576 Manuela Parkways Suite 934\nLangoshton, GA 79412",
        "partner": "Aut voluptate qui facere dolorem qui. Dolorem deserunt amet vel quam quasi nam et. Minus rem vero consequuntur quis voluptas. Quasi repudiandae vel omnis nisi."
    },
    {
        "id": 70,
        "title": "Veritatis reiciendis veniam et rem facilis.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "5666 Elissa Oval Suite 468\nWest Ernesto, VA 19837-1813",
        "shipment_to": "26908 Janie Turnpike\nNew Floydfort, PA 90048-8863",
        "partner": "Neque modi est in. Suscipit natus perspiciatis ipsum. Omnis quia odit quos animi rerum quibusdam ea. Vel repudiandae sed aliquid modi dignissimos omnis."
    },
    {
        "id": 71,
        "title": "Ullam ullam incidunt earum incidunt sint molestiae accusamus.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "9611 Zulauf Landing\nGenesisbury, SD 44160",
        "shipment_to": "7314 Esperanza Street Suite 819\nWest Brennonmouth, CT 90437",
        "partner": "Aut eveniet quos nulla iusto alias dolorem veniam. Molestiae consequuntur et et optio qui et rem. Asperiores debitis modi voluptatum."
    },
    {
        "id": 72,
        "title": "Omnis hic nobis sed.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "697 Esperanza Ramp Apt. 884\nTarafurt, WI 43393",
        "shipment_to": "55943 Lowe Parks Apt. 469\nVinniebury, TN 25072",
        "partner": "Incidunt sed perferendis voluptas. Modi corrupti incidunt iusto officia error ut iure. Adipisci et ab saepe incidunt placeat nihil in. Quia debitis aspernatur dolores."
    },
    {
        "id": 73,
        "title": "Sint ullam incidunt repellendus sed sit vel vel magnam.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "29148 Little Springs\nPort Geovanny, DC 09135-9132",
        "shipment_to": "8088 Christ Mews Suite 657\nDonaldport, KY 08187-9594",
        "partner": "Quibusdam et sunt sapiente voluptas odit qui. At et eaque eligendi. Nesciunt aperiam laudantium nemo minus. Nostrum commodi qui voluptates dolore dolores consectetur dolorum et."
    },
    {
        "id": 74,
        "title": "Est sint blanditiis sit eos quis vero.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "7120 Corkery Grove Apt. 746\nMitchellfort, AR 88708-6239",
        "shipment_to": "813 Verdie Causeway Apt. 032\nCummerataview, RI 52435-2971",
        "partner": "Et rerum non nihil maxime laboriosam dolorum. Repellat quos iste non adipisci et aut. Iusto eligendi fuga magni quisquam reprehenderit occaecati quas velit."
    },
    {
        "id": 75,
        "title": "Ex ut unde dolorem voluptatem.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "2664 Jaylin Parks Apt. 329\nNorth Zarialand, LA 15717-4349",
        "shipment_to": "852 Jerome Springs Suite 017\nWest Candaceburgh, IL 38171-7998",
        "partner": "Itaque voluptatem quisquam repudiandae consectetur in eos corrupti aut. Minima illo asperiores placeat recusandae qui reprehenderit."
    },
    {
        "id": 76,
        "title": "Quia hic fuga cupiditate molestiae quia sapiente.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "76160 Quigley Motorway Apt. 640\nNorth Declan, MN 61920-4992",
        "shipment_to": "139 Murazik Harbor\nEast D'angelo, KS 95021-8585",
        "partner": "Commodi sapiente eum soluta. Soluta ducimus fuga reiciendis sed voluptatum impedit. Tempore id sit pariatur assumenda quia possimus dolorum. Adipisci qui quis molestias voluptate."
    },
    {
        "id": 77,
        "title": "Ut et nostrum ad exercitationem.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "4196 Louie Views Suite 426\nNew Claudine, MS 25362-1029",
        "shipment_to": "30125 Thompson Bypass Apt. 658\nEast Frankie, MI 57679",
        "partner": "Eum tenetur doloremque doloremque et temporibus. Id minus velit eos deleniti et est exercitationem. Quam atque quis assumenda rem et non sit."
    },
    {
        "id": 78,
        "title": "Quia recusandae omnis illum quibusdam odit.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "8556 Green Falls\nNew Gail, VT 03221-6686",
        "shipment_to": "64609 Runte Throughway\nPort Mariano, NJ 48233",
        "partner": "Quis molestiae et sunt quia. Voluptatem neque repellendus a. Nostrum sint sequi dolorum ullam itaque blanditiis qui nam."
    },
    {
        "id": 79,
        "title": "Nihil autem fugiat praesentium voluptas quam.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "5271 Gislason Road\nRomagueraberg, GA 71246-6263",
        "shipment_to": "48342 Vandervort Lock\nPort Conner, OR 15415",
        "partner": "Recusandae cum pariatur eligendi nobis vel illo. Et similique magni quis et animi quod non. Expedita consectetur reiciendis vero fuga animi qui consequatur impedit."
    },
    {
        "id": 80,
        "title": "Impedit aspernatur voluptatem blanditiis itaque aliquam.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "383 Katharina Shores Suite 651\nMullerton, WY 62398",
        "shipment_to": "165 Corbin Row\nPort Dandre, MT 36385",
        "partner": "Totam omnis sed consequatur adipisci. Culpa corporis tempora repudiandae eum molestias. Quia facilis in mollitia voluptates. Voluptatem doloremque autem quibusdam iure."
    },
    {
        "id": 81,
        "title": "Repellendus sequi commodi quia porro incidunt.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "301 Delaney Harbors Suite 453\nCarterfurt, KY 06782-9748",
        "shipment_to": "586 Rau Radial Suite 119\nAmayaland, IN 68762",
        "partner": "Rerum id et enim autem. Dolor et itaque qui itaque quod alias omnis maxime. Laudantium qui cumque dolorum quia dolores exercitationem. Possimus non saepe voluptatibus optio. Odio alias ut hic."
    },
    {
        "id": 82,
        "title": "Atque ea mollitia autem quia.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "11363 Flossie Drives\nWest Liana, FL 20132",
        "shipment_to": "90336 Kiehn Club\nAndersonhaven, KY 73134-5711",
        "partner": "Voluptate inventore culpa non quis. Aut at ipsa dignissimos totam beatae. Suscipit fugiat laudantium molestias dolorum."
    },
    {
        "id": 83,
        "title": "Autem vitae aut iure laboriosam sunt.",
        "type": "Completed",
        "user_id": 4,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "79263 Abigale Plaza\nEfrainhaven, NE 35690",
        "shipment_to": "70700 Wilkinson Meadows\nPort Angelica, SC 51692",
        "partner": "Provident et qui debitis eveniet. Voluptatem sed aspernatur totam dolorum doloremque. Mollitia iste consequatur commodi voluptas quos. Et iusto tempore nulla et qui modi dolorem."
    },
    {
        "id": 84,
        "title": "Mollitia et est ut sit.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "489 Winfield Isle Apt. 885\nWest Pamela, SC 24967-0773",
        "shipment_to": "75081 Green Spring\nLaurencehaven, MA 01056",
        "partner": "Optio autem officiis nemo delectus vel non. Laboriosam earum dicta nam cupiditate excepturi nihil a. Consectetur dolores doloribus eum velit aspernatur laboriosam hic cupiditate."
    },
    {
        "id": 85,
        "title": "Ea tenetur cum qui et possimus quis cupiditate.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "30576 Josefa Pass Suite 629\nPort Wilhelm, OH 95822",
        "shipment_to": "767 Emmitt Unions Apt. 699\nVedahaven, AZ 73712-0132",
        "partner": "Nihil vel ipsa enim ducimus. Quas aut ullam aut sit debitis ipsam. Libero officiis qui autem debitis. Quibusdam natus et et iste illo."
    },
    {
        "id": 86,
        "title": "Id suscipit vel quis a.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "4889 Pearline Forks Suite 086\nSouth Lea, MO 18881-3895",
        "shipment_to": "76422 Ortiz Gardens\nArlieview, NC 31305",
        "partner": "Rerum iusto asperiores iusto. Accusamus eos rerum aut rerum natus. Velit a in quasi consequatur. Cumque ea quas quo dolorem quod."
    },
    {
        "id": 87,
        "title": "Sed pariatur dolorem culpa optio incidunt.",
        "type": "Completed",
        "user_id": 6,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "16165 Golden Corner Suite 790\nKendratown, AK 79632",
        "shipment_to": "753 Jaqueline Squares\nJacobiview, CA 74375",
        "partner": "Occaecati ut reprehenderit repellendus quia ducimus. Vero culpa consequuntur non a. Dolorum fugit distinctio consequatur explicabo quia et. Sint laudantium consequatur non nihil est."
    },
    {
        "id": 88,
        "title": "Veritatis minima consequatur vel pariatur dolores nihil aut et.",
        "type": "Completed",
        "user_id": 2,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "99979 Botsford Trace Apt. 946\nNew Elmore, WI 82707-0482",
        "shipment_to": "3337 Bergnaum Drive Apt. 006\nRolandofort, KY 39760-8404",
        "partner": "Dolorum ipsa nisi perspiciatis dolorem quis voluptas sit ea. Nihil doloribus necessitatibus mollitia ut rerum maxime. Delectus beatae aliquam rem illo nesciunt maiores."
    },
    {
        "id": 89,
        "title": "Atque dolor voluptatum optio dolorem aspernatur quia.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "75832 Morar Parkway Suite 267\nReganshire, GA 25981-2073",
        "shipment_to": "936 Maeve Knolls\nSouth Alysaborough, AR 03446-3516",
        "partner": "Ipsum laudantium vitae exercitationem sequi aut recusandae. Repellendus quibusdam aut et alias non illum consequuntur et. Delectus aut numquam quia ad et sapiente."
    },
    {
        "id": 90,
        "title": "Incidunt nulla reiciendis temporibus qui temporibus.",
        "type": "Completed",
        "user_id": 8,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "1818 Kemmer Summit\nPort Hillardville, TN 04835",
        "shipment_to": "2568 Blanda Mission Apt. 016\nGrahamton, CA 22045",
        "partner": "Nesciunt nesciunt sint illum deserunt exercitationem. Soluta repellendus quidem et tempore. Blanditiis sed illo expedita est."
    },
    {
        "id": 91,
        "title": "Dolor et itaque dolorem praesentium.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "87172 Lavon Mill Suite 316\nProsaccofurt, RI 29767",
        "shipment_to": "72557 Waters Shore Apt. 609\nLake Normaview, IL 08121-5795",
        "partner": "Esse qui quae dolor dicta ducimus. Alias rem qui ut excepturi quia. Ipsam quas laboriosam amet omnis voluptas nihil aut reprehenderit."
    },
    {
        "id": 92,
        "title": "Fuga velit quisquam laudantium et recusandae rerum commodi.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "472 Schneider Roads Suite 522\nLake Gene, IA 89197",
        "shipment_to": "26618 Misael Summit\nLakintown, TN 90544",
        "partner": "Officiis nulla consequatur consequuntur accusantium omnis. Assumenda eveniet quia in magni dolores ipsam. Dolorem alias et ea fugiat dolorem. Modi ut natus tempora aut."
    },
    {
        "id": 93,
        "title": "Illum voluptatibus nisi voluptatibus eos.",
        "type": "Completed",
        "user_id": 10,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "811 Anabel Path Apt. 842\nNorth Hattiefurt, NH 82874-7304",
        "shipment_to": "83010 Donny Court\nPort Nashhaven, GA 97908-6802",
        "partner": "Tempora sint quaerat iste tenetur sapiente nulla. Harum in libero quia qui. Reiciendis iusto nisi est pariatur provident."
    },
    {
        "id": 94,
        "title": "Aperiam totam est eveniet minima quo ipsam.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "786 DuBuque Groves\nKathleenborough, RI 05261",
        "shipment_to": "975 Orie Run\nEast Angel, MI 35688",
        "partner": "Modi voluptates esse omnis unde saepe nihil nam architecto. Voluptates modi est porro placeat et. Esse et suscipit laudantium ipsam et."
    },
    {
        "id": 95,
        "title": "Quia sunt non et sed.",
        "type": "Completed",
        "user_id": 1,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "27489 Gerhard Pine Suite 677\nEnriquefurt, MD 57826-6455",
        "shipment_to": "621 Conn Lodge\nWest Noelfort, OR 80146-2711",
        "partner": "Ut ex cum illo tenetur nisi blanditiis esse qui. Voluptas ipsa ratione doloribus quam voluptatibus exercitationem debitis debitis. Atque sit dolor eum beatae aut maxime."
    },
    {
        "id": 96,
        "title": "Nobis exercitationem labore numquam.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "1435 Floy Plain Apt. 435\nEast Marley, TX 24066-9033",
        "shipment_to": "98710 Smith Estate Apt. 039\nTodside, AK 52359-3555",
        "partner": "Qui possimus et excepturi sed. Dolor a quaerat debitis dolorem et quod est. Nemo pariatur sunt ut soluta excepturi ut vero. Enim dicta ut eligendi labore."
    },
    {
        "id": 97,
        "title": "Quis sunt inventore amet nobis provident.",
        "type": "Completed",
        "user_id": 3,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "823 Ellie Throughway Suite 364\nManteborough, ND 75555",
        "shipment_to": "680 Breitenberg Road Apt. 626\nBlockview, MA 79837",
        "partner": "Consequatur magni rerum quod pariatur iusto quia. Eos perferendis quas omnis ipsum perspiciatis. Illo corporis commodi dignissimos perferendis iure delectus nihil."
    },
    {
        "id": 98,
        "title": "Suscipit et delectus magnam et recusandae.",
        "type": "Completed",
        "user_id": 9,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "6455 Reba Light\nEast Jermaine, LA 04418",
        "shipment_to": "5889 Krajcik Garden\nPort Annabell, KS 33602",
        "partner": "Quas ab maiores fuga totam in temporibus. Qui possimus quos omnis maiores quis. Quia dolorem dolorem et qui alias aut."
    },
    {
        "id": 99,
        "title": "Laudantium dolorem quod et officiis exercitationem saepe deleniti.",
        "type": "Completed",
        "user_id": 5,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "2396 Tre Expressway Suite 025\nWest Pollytown, MD 52573-0892",
        "shipment_to": "457 Conroy Landing Suite 640\nLake Judgemouth, KS 40589-3482",
        "partner": "Non et omnis ut odio vel eligendi animi. Consequuntur in ut et nihil saepe. Molestias reiciendis et enim. Quod quos deleniti dignissimos velit est sit. Animi modi ipsum sed."
    },
    {
        "id": 100,
        "title": "Soluta in sit beatae sit dolores praesentium ratione.",
        "type": "Completed",
        "user_id": 7,
        "created_at": "2018-08-02 21:21:46",
        "updated_at": "2018-08-02 21:21:46",
        "shipment_from": "1346 Reilly Trail\nZolaberg, GA 74972-7220",
        "shipment_to": "261 Hansen Ford\nNiaside, AK 30941",
        "partner": "Omnis quidem et quaerat corporis aperiam. Recusandae ipsam natus quos ipsa."
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (shipment) => {
    return replaceAll(shipment.title, ' ', '-');
};

class ShipmentApi {
    static getAllShipments() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], shipments));
            }, delay);
        });
    }

    static saveShipment(shipment) {
        shipment = Object.assign({}, shipment); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minShipmentTitleLength = 1;
                if (shipment.title.length < minShipmentTitleLength) {
                    reject(`Title must be at least ${minShipmentTitleLength} characters.`);
                }

                if (shipment.id) {
                    const existingShipmentIndex = shipments.findIndex(a => a.id === shipment.id);
                    shipments.splice(existingShipmentIndex, 1, shipment);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new shipments in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    shipment.id = generateId(shipment);
                    shipment.watchHref = `http://www.pluralsight.com/shipments/${shipment.id}`;
                    shipments.push(shipment);
                }

                resolve(shipment);
            }, delay);
        });
    }

    static deleteShipment(shipmentId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfShipmentToDelete = shipments.findIndex(shipment => shipment.id === shipmentId);
                shipments.splice(indexOfShipmentToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getShipment(shipmentId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingShipmentIndex = shipments.findIndex(shipment => shipment.id === shipmentId);

                const shipmentFound = Object.assign({}, shipments[existingShipmentIndex]);

                resolve(shipmentFound);

            }, delay);
        });
    }

}

export default ShipmentApi;