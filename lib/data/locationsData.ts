export interface LocationGroup {
  region: string;
  cities: string[];
}

export const TOP_FOOTER_DOMESTIC_LOCATIONS = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Noida', 'Gurgaon',
  'Jaipur', 'Dehradun', 'Uttarakhand', 'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore',
  'Ghaziabad', 'Faridabad', 'Thane', 'Navi Mumbai', 'Bhopal', 'Visakhapatnam', 'Patna', 'Bhubaneswar', 'Vadodara',
  'Rajkot', 'Ludhiana', 'Amritsar', 'Kanpur', 'Varanasi', 'Agra', 'Nashik', 'Mysuru', 'Mangalore', 'Goa',
  'Guwahati', 'Raipur', 'Ranchi', 'Jodhpur', 'Udaipur', 'Vijayawada', 'Thiruvananthapuram', 'Madurai', 'Meerut',
  'Moradabad', 'Prayagraj', 'Jammu', 'Gwalior', 'Gorakhpur', 'Ajmer', 'Kota', 'Jabalpur', 'Solapur', 'Kolhapur'
];

export const TOP_FOOTER_INTERNATIONAL_LOCATIONS = [
  'USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia'
];

export const FEATURED_DOMESTIC_LOCATIONS = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Noida', 'Gurgaon',
  'Jaipur', 'Dehradun', 'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore', 'Bhopal'
];

export const FEATURED_INTERNATIONAL_LOCATIONS = [
  'USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia', 'Abu Dhabi', 'Qatar'
];

export const LOCATION_GROUPS: LocationGroup[] = [
  {
    region: 'Tier-1 Metros & Tech Hubs',
    cities: ['Mumbai', 'Delhi NCR', 'Noida', 'Gurgaon', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Kochi', 'Bhopal', 'Patna', 'Bhubaneswar', 'Coimbatore', 'Nagpur', 'Varanasi', 'Goa']
  },
  {
    region: 'North & Central Markets',
    cities: ['Agra', 'Kanpur', 'Prayagraj', 'Gorakhpur', 'Meerut', 'Ghaziabad', 'Faridabad', 'Panipat', 'Rohtak', 'Hisar', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Gwalior', 'Jabalpur', 'Ujjain', 'Jodhpur', 'Udaipur', 'Kota', 'Dehradun', 'Haridwar', 'Shimla']
  },
  {
    region: 'West & South Regions',
    cities: ['Thane', 'Navi Mumbai', 'Nashik', 'Aurangabad', 'Kolhapur', 'Solapur', 'Rajkot', 'Vadodara', 'Bhavnagar', 'Mysuru', 'Mangaluru', 'Hubballi', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Warangal', 'Madurai', 'Tiruchirappalli', 'Thiruvananthapuram', 'Thrissur', 'Kozhikode']
  },
  {
    region: 'East & North-East Growth Hubs',
    cities: ['Gaya', 'Muzaffarpur', 'Bhagalpur', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Siliguri', 'Durgapur', 'Asansol', 'Cuttack', 'Rourkela', 'Raipur', 'Bhilai', 'Guwahati', 'Shillong']
  },
  {
    region: 'Global Markets',
    cities: ['USA', 'Australia', 'UK', 'Canada', 'Dubai', 'Singapore', 'Malaysia', 'Abu Dhabi', 'Qatar', 'Saudi Arabia']
  }
];
