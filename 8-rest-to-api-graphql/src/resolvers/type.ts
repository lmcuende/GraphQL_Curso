import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../libs/utils';

const type: IResolvers = {
   Season: {
       year: parent => parent.season ,
       urlMobile: parent => getWikipediaMobileUrl(parent.url)
   } 
};

export default type;