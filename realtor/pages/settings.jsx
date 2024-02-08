import React from 'react';

const settings = () => {
  // Placeholder functions for handling events (to be implemented)
  const handlePictureUpload = () => {/* ... */};
  const handlePictureRemove = () => {/* ... */};
  const handleSaveChanges = (section) => {/* ... */};

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Account Settings</h1>
      
      <div className="bg-white shadow rounded-lg mb-6 p-6">
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Basic info</h2>
          <div className="flex items-center space-x-6 mb-6">
            <div className="shrink-0">
              <img className="h-24 w-24 rounded-full" src="/path_to_profile_image.jpg" alt="Profile" />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <div className="mt-1 flex items-center">
                <button
                  onClick={handlePictureUpload}
                  className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                  Upload new picture
                </button>
                <button
                  onClick={handlePictureRemove}
                  className="text-red-600 hover:text-red-700 font-medium py-2 px-4 rounded">
                  Remove
                </button>
              </div>
            </div>
          </div>
          {/* Replace below with form fields for name, date of birth, etc. */}
          <SettingField label="Name" value="Wade Armstrong" />
          <SettingField label="Date of Birth" value="December 24, 1991" />
          <SettingField label="Gender" value="Male" />
          <SettingField label="Email" value="wade.armstrong@email.com" />
        </div>

        <div className="pt-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account info</h2>
          {/* Replace below with form fields for username, password, etc. */}
          <SettingField label="Username" value="wadearmstrong08" />
          <SettingField label="Password" value="**********" />
        </div>
      </div>

      <div className="fixed bottom-10 right-10">
        <div className="bg-pink-100 text-pink-700 p-4 rounded-lg shadow">
          <span className="block text-sm">Guide to setup your account</span>
        </div>
      </div>
    </div>
  );
};

const SettingField = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-3">
      <span className="text-gray-600">{label}</span>
      <div className="flex items-center">
        <span className="text-gray-900 mr-2">{value}</span>
        <button className="text-gray-400 hover:text-gray-500">
          {/* Icon or > indicator */}
        </button>
      </div>
    </div>
  );
};

export default settings;
