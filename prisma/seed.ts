const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.lesson.deleteMany();
    console.log("Deleted records in lesson table");

    await prisma.lesson.createMany({
      data: [
        {
          title: "Twenty Thousand Leagues Under the Sea, Chapter One",
          level: 5,
          imageId: "33507_iqddhk",
          text: `THE YEAR 1866 was marked by a bizarre development, an unexplained and downright inexplicable phenomenon that surely no one has forgotten.
Without getting into those rumors that upset civilians in the seaports and deranged the public mind even far inland, it must be said that professional seamen were especially alarmed. Traders, shipowners, captains of vessels, skippers, and master mariners from Europe and America, naval officers from every country, and at their heels the various national governments on these two continents, were all extremely disturbed by the business.
In essence, over a period of time several ships had encountered "an enormous thing" at sea, a long spindle–shaped object, sometimes giving off a phosphorescent glow, infinitely bigger and faster than any whale.
The relevant data on this apparition, as recorded in various logbooks, agreed pretty closely as to the structure of the object or creature in question, its unprecedented speed of movement, its startling locomotive power, and the unique vitality with which it seemed to be gifted.
If it was a cetacean , it exceeded in bulk any whale previously classified by science. No naturalist, neither Cuvier nor Lacépède, neither Professor Dumeril nor Professor de Quatrefages, would have accepted the existence of such a monster sight unseen—specifically, unseen by their own scientific eyes.
Striking an average of observations taken at different times—rejecting those timid estimates that gave the object a length of 200 feet, and ignoring those exaggerated views that saw it as a mile wide and three long—you could still assert that this phenomenal creature greatly exceeded the dimensions of anything then known to ichthyologists, if it existed at all.
Now then, it did exist, this was an undeniable fact; and since the human mind dotes on objects of wonder, you can understand the worldwide excitement caused by this unearthly apparition.
As for relegating it to the realm of fiction, that charge had to be dropped. In essence, on July 20, 1866, the steamer Governor Higginson , from the Calcutta & Burnach Steam Navigation Co., encountered this moving mass five miles off the eastern shores of Australia.
Captain Baker at first thought he was in the presence of an unknown reef; he was even about to fix its exact position when two waterspouts shot out of this inexplicable object and sprang hissing into the air some 150 feet.
So, unless this reef was subject to the intermittent eruptions of a geyser, the Governor Higginson had fair and honest dealings with some aquatic mammal, until then unknown, that could spurt from its blowholes waterspouts mixed with air and steam. Similar events were likewise observed in Pacific seas, on July 23 of the same year, by the Christopher Columbus from the West India & Pacific Steam Navigation Co.
Consequently, this extraordinary cetacean could transfer itself from one locality to another with startling swiftness, since within an interval of just three days, the Governor Higginson and the Christopher Columbus had observed it at two positions on the charts separated by a distance of more than 700 nautical leagues. Fifteen days later and 2,000 leagues farther, the Helvetia from the Compagnie Nationale and the Shannon from the Royal Mail line, running on opposite tacks in that part of the Atlantic lying between the United States and Europe, respectively signaled each other that the monster had been sighted in latitude 42° 15' north and longitude 60° 35' west of the meridian of Greenwich.
From their simultaneous observations, they were able to estimate the mammal's minimum length at more than 350 English feet;* this was because both the Shannon and the Helvetia were of smaller dimensions, although each measured 100 meters stem to stern. Now then, the biggest whales, those rorqual whales that frequent the waterways of the Aleutian Islands, have never exceeded a length of 56 meters—if they reach even that. *userIdor's Note: About 106 meters. An English foot is only 30.4 centimeters. One after another, reports arrived that would profoundly affect public opinion: new observations taken by the transatlantic liner Pereire , the Inman line's Etna running afoul of the monster, an official report drawn up by officers on the French frigate Normandy , dead–earnest reckonings obtained by the general staff of Commodore Fitz–James aboard the Lord Clyde .
In lighthearted countries, people joked about this phenomenon, but such serious, practical countries as England, America, and Germany were deeply concerned. In every big city the monster was the latest rage; they sang about it in the coffee houses, they ridiculed it in the newspapers, they dramatized it in the theaters.
The tabloids found it a fine opportunity for hatching all sorts of hoaxes. In those newspapers short of copy, you saw the reappearance of every gigantic imaginary creature, from "Moby Dick," that dreadful white whale from the High Arctic regions, to the stupendous kraken whose tentacles could entwine a 500–ton craft and drag it into the ocean depths.
They even reprinted reports from ancient times: the views of Aristotle and Pliny accepting the existence of such monsters, then the Norwegian stories of Bishop Pontoppidan, the narratives of Paul Egede, and finally the reports of Captain Harrington—whose good faith is above suspicion—in which he claims he saw, while aboard the Castilian in 1857, one of those enormous serpents that, until then, had frequented only the seas of France's old extremist newspaper, The Constitutionalist . An interminable debate then broke out between believers and skeptics in the scholarly societies and scientific journals.
The "monster question" inflamed all minds.
During this memorable campaign, journalists making a profession of science battled with those making a profession of wit, spilling waves of ink and some of them even two or three drops of blood, since they went from sea serpents to the most offensive personal remarks. For six months the war seesawed.
With inexhaustible zest, the popular press took potshots at feature articles from the Geographic Institute of Brazil, the Royal Academy of Science in Berlin, the British Association, the Smithsonian Institution in Washington, D.C., at discussions in The Indian Archipelago, in Cosmos published by Father Moigno, in Petermann's Mittheilungen ,* and at scientific chronicles in the great French and foreign newspapers.
When the monster's detractors cited a saying by the botanist Linnaeus that "nature doesn't make leaps," witty writers in the popular periodicals parodied it, maintaining in essence that "nature doesn't make lunatics,\" and ordering their contemporaries never to give the lie to nature by believing in krakens, sea serpents, \"Moby Dicks,\" and other all–out efforts from drunken seamen. Finally, in a much–feared satirical journal, an article by its most popular columnist finished off the monster for good, spurning it in the style of Hippolytus repulsing the amorous advances of his stepmother Phædra, and giving the creature its quietus amid a universal burst of laughter. Wit had defeated science. *German: \"Bulletin. Ed.
During the first months of the year 1867, the question seemed to be buried, and it didn't seem due for resurrection, when new facts were brought to the public's attention.
But now it was no longer an issue of a scientific problem to be solved, but a quite real and serious danger to be avoided. The question took an entirely new turn. The monster again became an islet, rock, or reef, but a runaway reef, unfixed and elusive. On March 5, 1867, the Moravian from the Montreal Ocean Co., lying during the night in latitude 27° 30' and longitude 72° 15', ran its starboard quarter afoul of a rock marked on no charts of these waterways. Under the combined efforts of wind and 400–horsepower steam, it was traveling at a speed of thirteen knots.
Without the high quality of its hull, the Moravian would surely have split open from this collision and gone down together with those 237 passengers it was bringing back from Canada. This accident happened around five o'clock in the morning, just as day was beginning to break.
The officers on watch rushed to the craft's stern. They examined the ocean with the most scrupulous care. They saw nothing except a strong eddy breaking three cable lengths out, as if those sheets of water had been violently churned. The site's exact bearings were taken, and the Moravian continued on course apparently undamaged. Had it run afoul of an underwater rock or the wreckage of some enormous derelict ship? They were unable to say. But when they examined its undersides in the service yard, they discovered that part of its keel had been smashed.
This occurrence, extremely serious in itself, might perhaps have been forgotten like so many others, if three weeks later it hadn't been reenacted under identical conditions.
Only, thanks to the nationality of the ship victimized by this new ramming, and thanks to the reputation of the company to which this ship belonged, the event caused an immense uproar. No one is unaware of the name of that famous English shipowner, Cunard.
In 1840 this shrewd industrialist founded a postal service between Liverpool and Halifax, featuring three wooden ships with 400–horsepower paddle wheels and a burden of 1,162 metric tons. Eight years later, the company's assets were increased by four 650–horsepower ships at 1,820 metric tons, and in two more years, by two other vessels of still greater power and tonnage.
In 1853 the Cunard Co., whose mail–carrying charter had just been renewed, successively added to its assets the Arabia , the Persia , the China , the Scotia , the Java , and the Russia , all ships of top speed and, after the Great Eastern , the biggest ever to plow the seas. So in 1867 this company owned twelve ships, eight with paddle wheels and four with propellers. If I give these highly condensed details, it is so everyone can fully understand the importance of this maritime transportation company, known the world over for its shrewd management.
No transoceanic navigational undertaking has been conducted with more ability, no business dealings have been crowned with greater success.
In twenty–six years Cunard ships have made 2,000 Atlantic crossings without so much as a voyage canceled, a delay recorded, a man, a craft, or even a letter lost. Accordingly, despite strong competition from France, passengers still choose the Cunard line in preference to all others, as can be seen in a recent survey of official documents. Given this, no one will be astonished at the uproar provoked by this accident involving one of its finest steamers. On April 13, 1867, with a smooth sea and a moderate breeze, the Scotia lay in longitude 15° 12' and latitude 45° 37'. It was traveling at a speed of 13.43 knots under the thrust of its 1,000–horsepower engines. Its paddle wheels were churning the sea with perfect steadiness. It was then drawing 6.7 meters of water and displacing 6,624 cubic meters.
At 4:17 in the afternoon, during a high tea for passengers gathered in the main lounge, a collision occurred, scarcely noticeable on the whole, affecting the Scotia's hull in that quarter a little astern of its port paddle wheel. The Scotia hadn't run afoul of something, it had been fouled, and by a cutting or perforating instrument rather than a blunt one. This encounter seemed so minor that nobody on board would have been disturbed by it, had it not been for the shouts of crewmen in the hold, who climbed on deck yelling: "We're sinking!
We're sinking!"
At first the passengers were quite frightened, but Captain Anderson hastened to reassure them.
In fact, there could be no immediate danger. Divided into seven compartments by watertight bulkheads, the Scotia could brave any leak with impunity.
Captain Anderson immediately made his way into the hold.
He discovered that the fifth compartment had been invaded by the sea, and the speed of this invasion proved that the leak was considerable. Fortunately this compartment didn't contain the boilers, because their furnaces would have been abruptly extinguished. Captain Anderson called an immediate halt, and one of his sailors dived down to assess the damage.
Within moments they had located a hole two meters in width on the steamer's underside. Such a leak could not be patched, and with its paddle wheels half swamped, the Scotia had no choice but to continue its voyage. By then it lay 300 miles from Cape Clear, and after three days of delay that filled Liverpool with acute anxiety, it entered the company docks.
The engineers then proceeded to inspect the Scotia , which had been put in dry dock. They couldn't believe their eyes. Two and a half meters below its waterline, there gaped a symmetrical gash in the shape of an isosceles triangle. This breach in the sheet iron was so perfectly formed, no punch could have done a cleaner job of it. Consequently, it must have been produced by a perforating tool of uncommon toughness—plus, after being launched with prodigious power and then piercing four centimeters of sheet iron, this tool had needed to withdraw itself by a backward motion truly inexplicable. This was the last straw, and it resulted in arousing public passions all over again.
Indeed, from this moment on, any maritime casualty without an established cause was charged to the monster's account.
This outrageous animal had to shoulder responsibility for all derelict vessels, whose numbers are unfortunately considerable, since out of those 3,000 ships whose losses are recorded annually at the marine insurance bureau, the figure for steam or sailing ships supposedly lost with all hands, in the absence of any news, amounts to at least 200! Now then, justly or unjustly, it was the "monster" who stood accused of their disappearance; and since, thanks to it, travel between the various continents had become more and more dangerous, the public spoke up and demanded straight out that, at all cost, the seas be purged of this fearsome cetacean.`,
        },
        {
          title: "Story One: Mike is a Cook",
          level: 1,
          imageId: "chef_enitya",
          text: `Hi there.
These are stories that I want you to listen to.
They use the most common verbs in the language.
It's a place to practice basic structures in the language.
The story is told twice, and then there are questions.
And you can choose to answer the questions, or just listen to the answers that I provide.
So, story number one about Mike who works in a restaurant.
A) Mike gets up at six am every morning.
He makes breakfast and drinks a coffee.
He drives to work in his car.
His work starts at seven thirty am.
Mike is a cook at a restaurant.
He makes food for hungry customers.
The customers are from many countries.
They speak many different languages.
Mike can meet many friendly people.
Mike is happy when he talks to the customers.
Now I want you to listen to the same story, but this time told by Mike.
You'll notice it's a little different.
Here's Mike.
B) I get up at six am every morning.
I make breakfast and drink a coffee.
I drive to work in my car.
My work starts at seven thirty am.
I am a cook at a restaurant.
I make food for hungry customers.
The customers are from many different countries.
They speak many different languages.
I can meet many friendly people.
I am happy when I talk to the customers.
Now I want you to listen to the questions and if you think you can answer, please do so.
Out loud or not out loud, or just listen to the answers – it's up to you.
Questions:
One: Mike wakes up at six am every morning.
Does Mike wake up early?
Yes, Mike wakes up at six am every morning.
Two: Mike drinks a coffee.
Does Mike drink a tea?
No, Mike does not drink a tea, he drinks a coffee.
Three: Mike drives his car to work.
Does Mike drive his car to work?
Yes, Mike drives his car to work.
Four: Mike's work starts at seven thirty am.
Does Mike's work start at seven am?
No, Mike's work does not start at seven am.
It starts at seven thirty am.
Five: Mike is a cook at a restaurant.
Is Mike a cook?
Yes, Mike is a cook at a restaurant.
Six: The customers are from many different countries.
Are the customers from one country?
No, the customers are not from one country.
They are from many different countries.
Seven: The customers are friendly.
Are the customers friendly?
Yes, the customers are friendly.
Eight: Mike feels happy when he talks to the customers.
Does Mike feel happy when he talks to the customers?
Yes, Mike feels happy when he talks to the customers.
Alright, and that completes your first lesson in this series of mini stories that are going to help you understand and be able to use the English language.
I invite you to listen to the next story.
Bye for now.`,
        },
        {
          title: "Story Two: Dustin Wants to Take a Vacation",
          level: 1,
          imageId:
            "Beach_20Vacation_20Packing_20List-2021_GettyImages-1030311160_yq8aaw",
          text: `Now let's listen to the story of Dustin, who is excited about his winter holiday.
A) Dustin is excited for the winter holiday.
He has some time off in the winter.
He doesn't have to work for two weeks.
He wants to go on vacation.
But, he doesn't know where to go.
He wants to go to France.
But France is expensive.
The airplane tickets cost a lot.
And Dustin doesn't speak French.
He decides to study, save money, or stay home.
Now let's listen to the same story told by Dustin.
B) I am excited for the winter holiday.
I have some time off in the winter.
I don't have to work for two weeks.
I want to go on vacation.
But, I don't know where to go.
I want to go to France.
But France is expensive.
The airplane tickets cost a lot.
And I don't speak French.
I decide to study, save money, or stay home.
Now let's look at some questions. You can just listen if you want, or if you want to try to answer the questions, please do so, either silently or out loud.
Questions:
One: Dustin is excited for the winter holidays. Is Dustin excited? Yes, Dustin is excited for the winter holidays.
Two: Dustin has time off in the winter. Does Dustin have free time in the winter? Yes, Dustin has time off in the winter.
Three: Dustin wants to go on vacation. Does Dustin want to stay home? No, Dustin does not want to stay home. He wants to go on vacation.
Four: Dustin doesn't know where to go. Does Dustin know where to go? No, Dustin doesn't know where to go.
Five: Dustin wants to go to France for his vacation. Does Dustin want to go to France? Yes, Dustin wants to go to France for his vacation.
Six: France is expensive. Is France cheap?
No, France is not cheap. France is expensive.
Seven: Dustin does not speak French. Does Dustin speak French? No, Dustin does not speak French.
Eight: Dustin decides to study French, save money, or stay home for the vacation. Does Dustin decide to study French? Yes, he decides to study French, save money, or stay home for the vacation.
And there you have it, the story of Dustin who wanted to go on vacation. Thank you for listening, and we'll look forward to the next story.`,
        },
        {
          title: "Story Three: Karen Gets a Cat",
          level: 1,
          imageId: "ewudemhpsk9eioupqhyh",
          text: `A) Karen is bored at work and at home.
She does the same thing every day.
She wants a new hobby.
First, she tries to cook.
But her food does not taste good.
Then, she tries to swim.
But she is afraid of water.
Karen walks home and sees a pet store.
In the pet store, she sees a cat!
Karen buys the cat, and is now very happy.
Now the same story told by Karen.
B) I am bored at work and at home.
I do the same thing every day.
I want a new hobby.
First, I try to cook.
But my food does not taste good.
Then, I try to swim.
But I am afraid of water.
I walk home and see a pet store.
In the pet store, I see a cat!
I buy the cat, and am now very happy.
Now some questions about the story. I will say the answer after the question.
Questions:
One: Karen is bored at work, and at home. Is Karen happy at work? No, Karen is not happy at work. She is bored at work, and at home.
Two: Karen does the same thing every day. Does Karen do many new things?
No, Karen does the same thing every day.
Three: Karen wants a new hobby. Does Karen want a new hobby? Yes, Karen wants a new hobby.
Four: Karen's food does not taste good. Is Karen a good cook? No, Karen is not a good cook. Her food does not taste good.
Five: Karen is afraid of water. Does Karen like swimming? No, Karen does not like swimming. She is afraid of water.
Six: Karen sees a cat in a pet store. Does Karen see a cat in a store? Yes Karen sees a cat in a pet store.
Seven: Karen buys the cat from the pet store. Does Karen buy the cat? Yes, Karen buys the cat from the pet store.
Eight: Karen is now very happy because she has a cat. Is Karen bored now? No, Karen is not bored. She is now very happy because she has a cat.`,
        },
        {
          title: "Story Four: My Daughter is a Good Student",
          level: 1,
          imageId: "100602603_bibkhu",
          text: `
A) My daughter goes to school every day.
She likes school very much.
She is a good student at school.
The teachers like my daughter a lot.
My daughter also has many friends.
Her best friend is Amy.
Amy likes math and science.
My daughter likes English and history.
They help each other with homework.
They study hard and do well in school.
Now the same story told by the daughter.
B) I go to school every day.
I like school very much.
I am a good student at school.
My teachers like me a lot.
I also have many friends.
My best friend is Amy.
She likes math and science.
I like English and history.
We help each other with homework.
We study hard and do well in school.
Now some questions about the story. I will say the answer after the question.
Questions:
One: The daughter goes to school every day. Does the daughter go to school every day? Yes, she goes to school every day.
Two: The daughter likes school. Does the daughter like school? Yes, she likes school.
Three: The daughter is a good student. Is the daughter a bad student? No, the daughter is not a bad student. She is a good student.
Four: The teachers like the daughter. Do the teachers like the daughter? Yes, the teachers like her.
Five: Her best friend is named Amy. Is her best friend named Julie? No, her best friend is named Amy.
Six: Amy likes math and science. Does Amy like English and history?
No, she likes math and science.
Seven: The daughter and Amy do well in school. Does the daughter do well in school? Yes, the daughter and Amy do well in school.`,
        },
        {
          title: "Canadian English: Chapter II, Part 1",
          level: 4,
          imageId: "yiylevm1kp1ip5iebhsj",
          text: `The first Canadians were the native Indians who came from Asia over 10,000 years ago.
They were fishers, hunters and farmers. They developed different cultures in different areas. In Central America these people developed one of the most famous independent centres of world civilization, with science, writing and advanced construction techniques. Scientists now believe there were different waves of settlement from Asia which spread out over the American continent. That is why there are different language groups in different areas. There may have been other visitors to North America over the centuries but we do not know for sure.
The first known European visitors were the Vikings roughly 1,000 years ago. Because of wars and pressure on the land, some Vikings had left Europe and settled in Iceland. For the same reasons they moved on to Greenland. The world was warmer at that time, otherwise Greenland would not have been called Greenland. From there the Vikings went further west and stopped on the east coast of Canada. They found nature there to be very pleasant, green and rich. They fought with the local natives, some of their people were killed and therefore they left and returned to Iceland.
Western Europeans were fishing off the east coast of Canada in the 16th century. Eventually French and English people started settling as farmers and fur traders all along the Atlantic Coast of North America.
Wars between European powers like France, England, Spain and Holland affected developments in North America. In 1763 England defeated France at the battle of Quebec and this meant that Canada became English instead of French. At that time most Europeans in Canada were French speakers. This now started to change.
In 1776 the American War of Independence took place. A new nation was created. The United States. Many people living in the new United States wanted to remain a part of the British Empire. Many tens of thousands of people moved north to Canada. These were the United Empire Loyalists. This was the first large scale movement of English speaking people into Canada. These people were really Americans and they determined how Canadians would speak English.
These people wanted to remain loyal to the King of England. During the 19th century there was major immigration from Great Britain to Canada. Much of this immigration was from Scotland and Northern Ireland. As a result Canada was very closely attached to the British Empire.`,
        },
      ],
    });
    console.log("Added lesson data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
