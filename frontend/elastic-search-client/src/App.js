import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  let enumerate = 1;
  const [input, setInput] = useState("");
  const [preferred, setPreffered] = useState([]);
  const onInputChange = (text) => {
    setInput(text);
  };
  const onCardClick = (id) => {
    const preferredList = [
      ...preferred,
      resultsTest.find((item) => item.id === id),
    ];
    console.log(preferredList);
    setPreffered(preferredList);
  };
  const onPreferredClick = (id) => {
    const preferredList = preferred.filter((item) => item.id !== id);
    setPreffered(preferredList);
  };
  // This will be fetched from API endpoint
  const resultsTest = [
    {
      id: 0,
      url: "https://www.goodreads.com/author/show/1476.Doris_Kearns_Goodwin",
      image: "https://images.gr-assets.com/authors/1533042194p8/1476.jpg",
      name: "Doris Kearns Goodwin",
      birth_date: "1943-01-04 00:00:00",
      genres: ["Biographies & Memoirs", "History", "Nonfiction"],
      avg_rating: 4.21,
      num_reviews: 14071,
      num_ratings: 254438,
      about:
        'DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . ...more',
    },
    {
      id: 1,
      url: "https://www.goodreads.com/author/show/17274107.Stacey_Abrams",
      image: "https://images.gr-assets.com/authors/1526832396p8/17274107.jpg",
      name: "Stacey Abrams",
      birth_date: "1973-12-09 00:00:00",
      avg_rating: 4.39,
      num_reviews: 1513,
      num_ratings: 8282,
      about:
        "Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she w Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she was hired as a typist for a congressional campaign and was later hired as a speechwriter at age 17 based on the edits she made while typing. In 1995, Abrams earned a Bachelor of Arts degree in Interdisciplinary Studies (Political Science, Economics and Sociology) from Spelman College, magna cum laude. While in college, Abrams worked in the youth services department in the office of Atlanta mayor Maynard Jackson. She later interned at the Environmental Protection Agency. As a Harry S. Truman Scholar, she studied public policy at the University of Texas at Austin's LBJ School of Public Affairs and went on to earn her J.D. from Yale Law School.Abrams worked as a tax attorney at the Sutherland Asbill &amp; Brennan law firm in Atlanta, with a focus on tax-exempt organizations, health care and public finance. She was appointed the Deputy City Attorney for Atlanta at age 29.Abrams co-founded and served as the senior vice president of NOW Corp. (formerly NOWaccount Network Corporation), a financial services firm. She co-founded Nourish, Inc., a beverage company with a focus on infants and toddlers, and is CEO of Sage Works, a legal consulting firm, that has represented clients including the Atlanta Dream of the WNBA.Abrams has had an extensive writing career, penning several best-selling novels under the nom de plume of Selina Montgomery. Abrams is also the author of 'Minority Leader', a book of leadership advice to be published by Henry Holt &amp; Co. in April 2018. ...more",
    },
    {
      id: 2,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 3,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 4,
      url: "https://www.goodreads.com/author/show/1476.Doris_Kearns_Goodwin",
      image: "https://images.gr-assets.com/authors/1533042194p8/1476.jpg",
      name: "Doris Kearns Goodwin",
      birth_date: "1943-01-04 00:00:00",
      genres: ["Biographies & Memoirs", "History", "Nonfiction"],
      avg_rating: 4.21,
      num_reviews: 14071,
      num_ratings: 254438,
      about:
        'DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . ...more',
    },
    {
      id: 5,
      url: "https://www.goodreads.com/author/show/17274107.Stacey_Abrams",
      image: "https://images.gr-assets.com/authors/1526832396p8/17274107.jpg",
      name: "Stacey Abrams",
      birth_date: "1973-12-09 00:00:00",
      avg_rating: 4.39,
      num_reviews: 1513,
      num_ratings: 8282,
      about:
        "Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she w Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she was hired as a typist for a congressional campaign and was later hired as a speechwriter at age 17 based on the edits she made while typing. In 1995, Abrams earned a Bachelor of Arts degree in Interdisciplinary Studies (Political Science, Economics and Sociology) from Spelman College, magna cum laude. While in college, Abrams worked in the youth services department in the office of Atlanta mayor Maynard Jackson. She later interned at the Environmental Protection Agency. As a Harry S. Truman Scholar, she studied public policy at the University of Texas at Austin's LBJ School of Public Affairs and went on to earn her J.D. from Yale Law School.Abrams worked as a tax attorney at the Sutherland Asbill &amp; Brennan law firm in Atlanta, with a focus on tax-exempt organizations, health care and public finance. She was appointed the Deputy City Attorney for Atlanta at age 29.Abrams co-founded and served as the senior vice president of NOW Corp. (formerly NOWaccount Network Corporation), a financial services firm. She co-founded Nourish, Inc., a beverage company with a focus on infants and toddlers, and is CEO of Sage Works, a legal consulting firm, that has represented clients including the Atlanta Dream of the WNBA.Abrams has had an extensive writing career, penning several best-selling novels under the nom de plume of Selina Montgomery. Abrams is also the author of 'Minority Leader', a book of leadership advice to be published by Henry Holt &amp; Co. in April 2018. ...more",
    },
    {
      id: 6,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 7,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 8,
      url: "https://www.goodreads.com/author/show/1476.Doris_Kearns_Goodwin",
      image: "https://images.gr-assets.com/authors/1533042194p8/1476.jpg",
      name: "Doris Kearns Goodwin",
      birth_date: "1943-01-04 00:00:00",
      genres: ["Biographies & Memoirs", "History", "Nonfiction"],
      avg_rating: 4.21,
      num_reviews: 14071,
      num_ratings: 254438,
      about:
        'DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . ...more',
    },
    {
      id: 9,
      url: "https://www.goodreads.com/author/show/17274107.Stacey_Abrams",
      image: "https://images.gr-assets.com/authors/1526832396p8/17274107.jpg",
      name: "Stacey Abrams",
      birth_date: "1973-12-09 00:00:00",
      avg_rating: 4.39,
      num_reviews: 1513,
      num_ratings: 8282,
      about:
        "Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she w Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she was hired as a typist for a congressional campaign and was later hired as a speechwriter at age 17 based on the edits she made while typing. In 1995, Abrams earned a Bachelor of Arts degree in Interdisciplinary Studies (Political Science, Economics and Sociology) from Spelman College, magna cum laude. While in college, Abrams worked in the youth services department in the office of Atlanta mayor Maynard Jackson. She later interned at the Environmental Protection Agency. As a Harry S. Truman Scholar, she studied public policy at the University of Texas at Austin's LBJ School of Public Affairs and went on to earn her J.D. from Yale Law School.Abrams worked as a tax attorney at the Sutherland Asbill &amp; Brennan law firm in Atlanta, with a focus on tax-exempt organizations, health care and public finance. She was appointed the Deputy City Attorney for Atlanta at age 29.Abrams co-founded and served as the senior vice president of NOW Corp. (formerly NOWaccount Network Corporation), a financial services firm. She co-founded Nourish, Inc., a beverage company with a focus on infants and toddlers, and is CEO of Sage Works, a legal consulting firm, that has represented clients including the Atlanta Dream of the WNBA.Abrams has had an extensive writing career, penning several best-selling novels under the nom de plume of Selina Montgomery. Abrams is also the author of 'Minority Leader', a book of leadership advice to be published by Henry Holt &amp; Co. in April 2018. ...more",
    },
    {
      id: 10,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 11,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 12,
      url: "https://www.goodreads.com/author/show/1476.Doris_Kearns_Goodwin",
      image: "https://images.gr-assets.com/authors/1533042194p8/1476.jpg",
      name: "Doris Kearns Goodwin",
      birth_date: "1943-01-04 00:00:00",
      genres: ["Biographies & Memoirs", "History", "Nonfiction"],
      avg_rating: 4.21,
      num_reviews: 14071,
      num_ratings: 254438,
      about:
        'DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . DORIS KEARNS GOODWIN\u2019s interest in leadership began more than half a century ago as a professor at Harvard. Her experiences working for LBJ in the White House and later assisting him on his memoirs led to her bestselling "Lyndon Johnson and the American Dream." She followed up with the Pulitzer Prize\u2013winning "No Ordinary Time: Franklin &amp; Eleanor Roosevelt: The Home Front in World War II." She earned the Lincoln Prize for the runaway bestseller "Team of Rivals," the basis for Steven Spielberg\u2019s Academy Award-winning film "Lincoln," and the Carnegie Medal for "The Bully Pulpit," the "New York Times" bestselling chronicle of the friendship between Theodore Roosevelt and William Howard Taft. She lives in Concord, Massachusetts. . ...more',
    },
    {
      id: 13,
      url: "https://www.goodreads.com/author/show/17274107.Stacey_Abrams",
      image: "https://images.gr-assets.com/authors/1526832396p8/17274107.jpg",
      name: "Stacey Abrams",
      birth_date: "1973-12-09 00:00:00",
      avg_rating: 4.39,
      num_reviews: 1513,
      num_ratings: 8282,
      about:
        "Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she w Stacey Abrams is an American politician, lawyer, author, and businesswoman who was the house minority leader for the Georgia General Assembly and state representative for the 89th House District. She is a Democrat. Abrams is a candidate in the 2018 Georgia gubernatorial election.If elected, Abrams will be Georgia's first female governor and the first black female governor in the United States.Abrams, one of six siblings, was born to Robert and Carolyn Abrams in Madison, Wisconsin and raised in Gulfport, Mississippi. The family moved to Atlanta where her parents pursued graduate school and later became Methodist ministers. She attended Avondale High School and was the school's first African-American valedictorian. While in high school, she was hired as a typist for a congressional campaign and was later hired as a speechwriter at age 17 based on the edits she made while typing. In 1995, Abrams earned a Bachelor of Arts degree in Interdisciplinary Studies (Political Science, Economics and Sociology) from Spelman College, magna cum laude. While in college, Abrams worked in the youth services department in the office of Atlanta mayor Maynard Jackson. She later interned at the Environmental Protection Agency. As a Harry S. Truman Scholar, she studied public policy at the University of Texas at Austin's LBJ School of Public Affairs and went on to earn her J.D. from Yale Law School.Abrams worked as a tax attorney at the Sutherland Asbill &amp; Brennan law firm in Atlanta, with a focus on tax-exempt organizations, health care and public finance. She was appointed the Deputy City Attorney for Atlanta at age 29.Abrams co-founded and served as the senior vice president of NOW Corp. (formerly NOWaccount Network Corporation), a financial services firm. She co-founded Nourish, Inc., a beverage company with a focus on infants and toddlers, and is CEO of Sage Works, a legal consulting firm, that has represented clients including the Atlanta Dream of the WNBA.Abrams has had an extensive writing career, penning several best-selling novels under the nom de plume of Selina Montgomery. Abrams is also the author of 'Minority Leader', a book of leadership advice to be published by Henry Holt &amp; Co. in April 2018. ...more",
    },
    {
      id: 14,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
    {
      id: 15,
      url: "https://www.goodreads.com/author/show/1439.Malcolm_Gladwell",
      image: "https://images.gr-assets.com/authors/1564001739p8/1439.jpg",
      name: "Malcolm Gladwell",
      birth_date: "1963-09-03 00:00:00",
      genres: ["Psychology", "Business", "Nonfiction"],
      avg_rating: 4.02,
      num_reviews: 89599,
      num_ratings: 2271524,
      about:
        "Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. Malcolm Gladwell is the author of five New York Times bestsellers\u2014The Tipping Point, Blink, Outliers, What the Dog Saw, and David and Goliath. He is also the co-founder of Pushkin Industries, an audio content company that produces the podcasts Revisionist History, which reconsiders things both overlooked and misunderstood, and Broken Record, where he, Rick Rubin, and Bruce Headlam interview musicians across a wide range of genres. Gladwell has been included in the TIME 100 Most Influential People list and touted as one of Foreign Policy's Top Global Thinkers. ...more",
    },
  ];
  return (
    <div className="app-base">
      <div className="container">
        <div>
          <Header title="Book Recommendation's - Elastic Search" />
          <SearchBar value={input} onChange={onInputChange} />
          <SearchResults results={resultsTest} onCardClick={onCardClick} />
        </div>
      </div>
      <div className="container-cart">
        {preferred.length
          ? preferred.map((item) => (
              <p
                className="pointer"
                key={item.id}
                onClick={() => onPreferredClick(item.id)}
              >
                {enumerate++}. {item.name}
              </p>
            ))
          : "Mark the books that you like!"}
      </div>
    </div>
  );
}

export default App;
