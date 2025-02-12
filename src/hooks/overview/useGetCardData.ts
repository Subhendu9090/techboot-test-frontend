import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/Store';
import { overViewCardData } from '../../controllers/overview/overviewController';
import { Card1Props } from '../../components/Overview/Card1';
import cardData from '../../utils/ConstantValues/OverView/CardData';
import toast from 'react-hot-toast';

function useGetCardData() {
  let { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [cardsData, setCardsData] = useState(cardData);
  useEffect(() => {
    const fetchCardData = async () => {
      setLoading(true);
      try {
        if (token === 'undefined' || token === null) {
          token = '';
        }

        const response = await overViewCardData('QWEGLE', 2, 2024, token);
        if (!response.success) {
          toast.error('Failed to fetch conversations');
        }
        const apiData = response.data;
        const updatedCardData: Card1Props[] = [
          {
            headerImageUrl: '/Overview/No. of trips icon.svg',
            headerTitle: 'Trips',
            value: apiData.current_period.data.total_trips.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.total_trips}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: '#EFF4FF',
          },
          {
            headerImageUrl: '/Overview/Total Users.svg',
            headerTitle: 'Users',
            value: apiData.current_period.data.total_users.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.total_users}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: '#E0F9DD',
          },
          {
            headerImageUrl: '/Overview/Total Creds Icon.svg',
            headerTitle: 'Creds Earned',
            value: apiData.current_period.data.total_creds_earned.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.total_creds_earned}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: 'rgb(132 154 173)',
          },
          {
            headerImageUrl: '/Overview/Vector.svg',
            headerTitle: 'CO2 Avoided',
            value: apiData.current_period.data.co2_avoided.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.co2_avoided}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: '#E0F9DD',
          },
          {
            headerImageUrl:
              '/Overview/points-and-dollars-exchange-svgrepo-com 2.svg',
            headerTitle: 'Creds Redeemed',
            value: apiData.current_period.data.total_creds_redeemed.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.total_creds_redeemed}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: 'rgb(129 172 231)',
          },
          {
            headerImageUrl: '/Overview/Miles Saved.svg',
            headerTitle: 'Miles Saved',
            value: apiData.current_period.data.miles_saved.toString(),
            footerImageUrl: '/Overview/Path 1008.png',
            footerData: `${apiData.growth.miles_saved}%`,
            footerTitle: 'vs last quarter',
            backgroundColor: '#EDD15A',
          },
        ];
        setCardsData(updatedCardData);
      } catch (error) {
        console.log('Error in getting table data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);
  return { loading, cardsData };
}

export default useGetCardData;
