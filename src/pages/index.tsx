/** @format */

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import logo from '../../assets/homiis-logo-color.png';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Stack, Theme } from '@mui/material';
import Grid from '@mui/material/Grid';

const inter = Inter({ subsets: ['latin'] });

//mui
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			margin: '1vw',
		},
	})
);

const TagChip = withStyles({
	root: {
		width: '7rem',
		height: '1.5rem',
		borderRadius: '4px',
	},
})(Chip);

const StyleChip = withStyles({
	root: {
		borderRadius: '8px',
	},
})(Chip);

const mockCustomerData = [
	{
		id: 1,
		name: 'Kristen',
		age: 22,
		img: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description:
			"Hi, I'm Kristen and I'm looking for one more roommate in the Waterloo area!. I'm super outgoing, and love to spend my free time wiming playing soccer or watching movies!. HMU If you're interested i8n Living together!",
		interests: [
			'4th year',
			'sports',
			'swimming',
			'night owl',
			'4th year',
			'sports',
			'swimming',
		],
	},
	{
		id: 2,
		name: 'Kristen',
		age: 22,
		img: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description:
			"Hi, I'm Kristen and I'm looking for one more roommate in the Waterloo area!. I'm super outgoing, and love to spend my free time wiming playing soccer or watching movies!. HMU If you're interested i8n Living together!",
		interests: [
			'4th year',
			'sports',
			'swimming',
			'night owl',
			'4th year',
			'sports',
			'swimming',
			'night owl',
		],
	},
	{
		id: 3,
		name: 'Kristen',
		age: 22,
		img: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		description:
			"Hi, I'm Kristen and I'm looking for one more roommate in the Waterloo area!. I'm super outgoing, and love to spend my free time wiming playing soccer or watching movies!. HMU If you're interested i8n Living together!",
		interests: [
			'4th year',
			'sports',
			'swimming',
			'night owl',
			'4th year',
			'sports',
			'swimming',
			'night owl',
		],
	},
];

export default function Home() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Image
					src={logo}
					width={100}
					alt={'logo'}
				/>
				<div className={classes.root}>
					{mockCustomerData.map((customer) => (
						// eslint-disable-next-line react/jsx-key
						<Card
							sx={{
								maxWidth: {
                  xs: 400,
                  md: 700
                },
								maxHeight: {
                  xs: '25vh',
                  md: '40vh'
                },
								borderRadius: '10px',
								backgroundImage: `url(${customer.img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								color: 'white',
								marginBottom: '2vw',
							}}>
							<CardActionArea
								sx={{
									display: 'flex',
									flexDirection: 'column',
									height: '100%',
								}}>
								<CardContent
									sx={{
										flexGrow: 1,
										width: '100%',
									}}>
									<Stack
										direction='column'
										spacing={1}
										sx={{
											marginBottom: '0.5',
											width: '20%',
											fontSize: '1rem',
										}}>
										<TagChip
											key='tag 1'
											label='tag 1'
											icon={<HomeIcon />}
											color='primary'
										/>
										<TagChip
											key='tag1'
											label='tag1'
											icon={<CalendarTodayIcon />}
											color='secondary'
										/>
										<TagChip
											key='tag 1'
											label='$815/month'
											color='primary'
										/>
									</Stack>
								</CardContent>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										sx={{ fontWeight: 'bold' }}
										component='div'>
										{customer.name},{customer.age}
									</Typography>
									<Stack
										direction='row'
										spacing={1}
										sx={{
											marginBottom: '0.5vw',
                      width: "50%"
										}}>
										<Grid
											container
											spacing={1}
                      >
											{customer.interests.map((interest) => (
												// eslint-disable-next-line react/jsx-key
												<Grid item xs={3}>
													<StyleChip
														key={interest}
														label={interest}
														size='small'
														color='primary'
													/>
												</Grid>
											))}
										</Grid>
									</Stack>
									<Typography variant='body2'>
										{customer.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</div>
			</div>
			<div className={styles.right}></div>
		</div>
	);
}
