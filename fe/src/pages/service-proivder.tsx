import { useServiceProvidersQuery } from '@/data/service-provider';
import React from 'react';

const ServiceProvider = () => {
  const { serviceProviders, loading, error } = useServiceProvidersQuery();

  return (
    <div className="p-20">
      {serviceProviders.map((serviceProvider) => {
        return <h1 key={serviceProvider.name}>{serviceProvider.name}</h1>;
      })}
    </div>
  );
};

export default ServiceProvider;
