import React, { createContext, useContext, useEffect, useState } from 'react';

import { Campaign } from '@/models/Campaign';

export interface CampaignProvider {
	createCampaign: (campaign: Campaign) => void;
	campaigns: Campaign[];
	deleteCampaign: (campaignId: string) => void;
	editCampaign: (campaign: Campaign) => void;
	setCampaigns: React.Dispatch<React.SetStateAction<Campaign[]>>;
}

export const campaignsStorageKey = '@cowfunding:campaigns';

const CampaignsContext = createContext<CampaignProvider | null>(null);

export const CampaignsProvider = ({ children }: React.PropsWithChildren) => {
	const [campaigns, setCampaigns] = useState<Campaign[]>([]);

	useEffect(() => {
		const storedCampaigns = localStorage.getItem(campaignsStorageKey);

		if (storedCampaigns) {
			const parsedCampaigns = JSON.parse(storedCampaigns);

			setCampaigns(parsedCampaigns);
		}
	}, []);

	const updateCampaigns = (newCampaigns: Campaign[]) => {
		localStorage.setItem(campaignsStorageKey, JSON.stringify(newCampaigns));
	};

	const calculateReceivedAmount = (campaign: Campaign) => {
		return campaign.donations.reduce((acc, curr) => acc + curr.usdAmount, 0);
	};

	const createCampaign = (newCampaign: Campaign) => {
		newCampaign.receivedAmount = calculateReceivedAmount(newCampaign);

		setCampaigns((prevCampaigns) => {
			const newCampaigns = [...prevCampaigns];

			newCampaigns.push(newCampaign);

			updateCampaigns(newCampaigns);

			return newCampaigns;
		});
	};

	const editCampaign = (newCampaign: Campaign) => {
		newCampaign.receivedAmount = calculateReceivedAmount(newCampaign);

		setCampaigns((prevCampaigns) => {
			const newCampaigns = [...prevCampaigns];

			const cIndex = newCampaigns.findIndex(({ id }) => id === newCampaign.id);

			newCampaigns[cIndex] = newCampaign;

			updateCampaigns(newCampaigns);

			return newCampaigns;
		});
	};

	const deleteCampaign = (campaignId: string) => {
		setCampaigns((prevCampaigns) => {
			const newCampaigns = [...prevCampaigns];

			const cIndex = newCampaigns.findIndex(({ id }) => id === campaignId);

			newCampaigns.splice(cIndex, 1);

			updateCampaigns(newCampaigns);

			return newCampaigns;
		});
	};

	return (
		<CampaignsContext.Provider
			value={{
				createCampaign,
				campaigns,
				deleteCampaign,
				editCampaign,
				setCampaigns,
			}}
		>
			{children}
		</CampaignsContext.Provider>
	);
};

export const useCampaigns = () => {
	const context = useContext(CampaignsContext);

	if (!context) {
		throw new Error('useCampaigns must be used within CampaignsProvider');
	}

	return context;
};

export default useCampaigns;
