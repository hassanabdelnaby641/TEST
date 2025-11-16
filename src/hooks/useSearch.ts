import { useState, useEffect, useMemo } from 'react';
import { Campaign } from '../types';

export const useSearch = (campaigns: Campaign[], searchTerm: string) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return campaigns;

    const searchLower = searchTerm.toLowerCase();
    return campaigns.filter(campaign => 
      campaign.title.toLowerCase().includes(searchLower) ||
      campaign.client.toLowerCase().includes(searchLower) ||
      campaign.description.toLowerCase().includes(searchLower)
    );
  }, [campaigns, searchTerm]);
};