using System;
using System.Collections.Generic;
using System.Linq;

namespace DinnerParty
{
    class Program
    {
        static void Main(string[] args)
        {
            seatingChart();
        }

        public static void seatingChart()
        {
            List<Guest> guests = GetGuests();
            List<Table> tables = GetTables();

            foreach (Guest guest in guests)
            {
                List<string> tableOneOccupations = tables[0].guestList.Select(guest => guest.Occupation).ToList();

                if (tableOneOccupations.Contains(guest.Occupation))
                {
                    tables[1].guestList.Add(guest);
                }
                else
                {
                    tables[0].guestList.Add(guest);
                }
            }

            foreach (Table table in tables)
            {
                Console.WriteLine(table.Name);
                foreach (Guest guest in table.guestList)
                {
                    Console.WriteLine($"{guest.Name} {guest.Occupation} {guest.Bio}");
                }
            }
        }

        public static List<Table> GetTables()
        {
            List<Table> allTables = new List<Table>()
        {
            new Table()
            {
                Name = "Table 1"
            },
            new Table()
            {
                Name = "Table 2"
            }
        };
            return allTables;
        }

        public static List<Guest> GetGuests()

        {
            List<Guest> allGuests = new List<Guest>()
            {
                new Guest()
                {
                    Name = "Marilyn Monroe",
                    Occupation = "entertainer",
                    Bio = "(1926 - 1962) American actress, singer, model"
                },
                new Guest()
                {
                    Name = "Abraham Lincoln",
                    Occupation = "politician",
                    Bio = "(1809 - 1865) US President during American civil war"
                },
                new Guest()
                {
                    Name = "Martin Luther King",
                    Occupation = "activist",
                    Bio = "(1929 - 1968)  American civil rights campaigner"
                },
                new Guest()
                {
                    Name = "Rosa Parks",
                    Occupation = "activist",
                    Bio = "(1913 - 2005)  American civil rights activist"
                },
                new Guest()
                {
                    Name = "Peter Sellers",
                    Occupation = "entertainer",
                    Bio = "(1925 - 1980) British actor and comedian"
                },
                new Guest()
                {
                    Name = "Alan Turing",
                    Occupation = "computer scientist",
                    Bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
                },
                new Guest()
                {
                    Name = "Admiral Grace Hopper",
                    Occupation = "computer scientist",
                    Bio = "(1906 - 1992) - developed early compilers = FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
                },
                new Guest()
                {
                    Name = "Indira Gandhi",
                    Occupation = "politician",
                    Bio = "(1917 - 1984) Prime Minister of India 1966 - 1977",
                }
            };
            return allGuests;
        }
    }
    public class Guest
    {
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string Bio { get; set; }
    }
    public class Table
    {
        public List<Guest> guestList { get; set; } = new List<Guest>();
        public string Name { get; set; }
    }
}
