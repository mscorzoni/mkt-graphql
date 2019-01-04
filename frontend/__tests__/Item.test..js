import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
  id: 'ABCD123',
  title: 'A Cool Item',
  price: 5000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

describe('<Item/>', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');
    expect(PriceTag.children().text()).toBe('$50');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  });

  it('renders the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');
    expect(buttonList.find('AddToCart').exists()).toBe(true);
  });

});