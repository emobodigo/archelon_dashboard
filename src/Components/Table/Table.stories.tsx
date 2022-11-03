import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
   title: 'Components/Table',
   component: Table,
   decorators: [withRouter]
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Main = Template.bind({});
export const NoData = Template.bind({});
export const Simplified = Template.bind({});

Main.args = {
   currentPage: 1,
   header: [
      {
         label: 'Username',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'name'
      },
      {
         label: 'Fullname',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'fullname'
      },
      {
         label: 'Position',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'position'
      }
   ],
   body: [
      {
         data: [
            {
               value: 'Aquaterra'
            },
            {
               value: 'Aquaterra'
            },
            {
               value: 'Administrator'
            }
         ],
         id: 1
      }
   ],
   hasDetailAction: true,
   hasEditAction: true,
   hasDeleteAction: true,
   totalRow: 50
};

NoData.args = {
   header: [
      {
         label: 'Username',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'name'
      },
      {
         label: 'Fullname',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'fullname'
      },
      {
         label: 'Position',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'position'
      }
   ],
   noDataMessage: 'No Admin listed',
   body: [],
   currentPage: 1
};

Simplified.args = {
   currentPage: 1,
   header: [
      {
         label: 'Username',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'name'
      },
      {
         label: 'Fullname',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'fullname'
      },
      {
         label: 'Position',
         enableSorting: true,
         currentSort: 'asc',
         sortingKey: 'position'
      }
   ],
   body: [
      {
         data: [
            {
               value: 'Aquaterra'
            },
            {
               value: 'Aquaterra'
            },
            {
               value: 'Administrator'
            }
         ],
         id: 1
      }
   ],
   hasDetailAction: true,
   hasEditAction: true,
   hasDeleteAction: true,
   totalRow: 50,
   simplifiedAction: true
};
